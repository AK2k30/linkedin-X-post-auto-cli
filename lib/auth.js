import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CREDENTIALS_PATH = path.join(__dirname, '..', 'credentials.json');

function storeCredentials(credentials) {
    fs.writeFileSync(CREDENTIALS_PATH, JSON.stringify(credentials, null, 2));
}

function getStoredCredentials() {
    if (fs.existsSync(CREDENTIALS_PATH)) {
        return JSON.parse(fs.readFileSync(CREDENTIALS_PATH, 'utf-8'));
    }
    return null;
}

export { storeCredentials, getStoredCredentials };