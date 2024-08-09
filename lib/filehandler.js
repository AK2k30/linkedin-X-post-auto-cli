import { exec } from 'child_process';
import path from 'path';
import { promisify } from 'util';
import fs from 'fs/promises';
import os from 'os';
import { v4 as uuidv4 } from 'uuid';

const execPromise = promisify(exec);

async function selectFile() {
    try {
        console.log('Opening file explorer...');
        
        // Create a temporary file to store the selected file path
        const tempFilePath = path.join(os.tmpdir(), `${uuidv4()}.txt`);
        
        // Open file explorer and wait for the user to select a file
        await execPromise(`powershell -Command "Add-Type -AssemblyName System.Windows.Forms; [System.Windows.Forms.OpenFileDialog]::new().ShowDialog() | Out-Null; [System.Windows.Forms.OpenFileDialog]::new().FileName" > "${tempFilePath}"`);

        // Read the file path from the temporary file
        const selectedFilePath = (await fs.readFile(tempFilePath)).toString().trim();

        // Clean up the temporary file
        await fs.unlink(tempFilePath);

        if (!await fileExists(selectedFilePath)) {
            throw new Error('Selected file does not exist.');
        }

        return { filePath: selectedFilePath };
    } catch (error) {
        throw new Error(`Failed to select file: ${error.message}`);
    }
}

async function fileExists(filePath) {
    try {
        await fs.access(filePath);
        return true;
    } catch {
        return false;
    }
}

export { selectFile };
