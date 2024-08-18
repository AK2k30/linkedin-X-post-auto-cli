import inquirer from 'inquirer';
import { selectFile } from './lib/filehandler.js';
import { getCaption } from './lib/captionGenerator.js';
import { storeCredentials, getStoredCredentials } from './lib/auth.js';
import { postToLinkedIn, postToTwitter } from './lib/post.js';

async function main() {
    try {
        let credentials = getStoredCredentials();
        
        if (!credentials) {
            console.log("Please enter your LinkedIn and Twitter (now X) credentials:");
            const answers = await inquirer.prompt([
                { type: 'input', name: 'linkedinUsername', message: 'LinkedIn Username:' },
                { type: 'password', name: 'linkedinPassword', message: 'LinkedIn Password:' },
                { type: 'input', name: 'twitterUsername', message: 'Twitter (now X) Username:' },
                { type: 'password', name: 'twitterPassword', message: 'Twitter (now X) Password:' },
            ]);
            const { linkedinUsername, linkedinPassword, twitterUsername, twitterPassword } = answers;
            storeCredentials({ linkedinUsername, linkedinPassword, twitterUsername, twitterPassword });
            credentials = { linkedinUsername, linkedinPassword, twitterUsername, twitterPassword };
        }

        console.log('Select file option:');
        const { fileOption } = await inquirer.prompt([
            { type: 'list', name: 'fileOption', message: 'Choose an option:', choices: ['Select from folder', 'Enter manually'] }
        ]);

        let fileContent;
        if (fileOption === 'Select from folder') {
            const { filePath } = await selectFile();
            fileContent = filePath;
        } else {
            const { manualText } = await inquirer.prompt([
                { type: 'input', name: 'manualText', message: 'Enter your text or file name:' }
            ]);
            fileContent = manualText;
        }

        const { captionOption } = await inquirer.prompt([
            { type: 'list', name: 'captionOption', message: 'Choose caption option:', choices: ['Enter manually', 'Generate automatically', 'Skip'] }
        ]);

        let caption = '';
        if (captionOption === 'Enter manually') {
            const { manualCaption } = await inquirer.prompt([
                { type: 'input', name: 'manualCaption', message: 'Enter your caption (optional):' }
            ]);
            caption = manualCaption;
        } else if (captionOption === 'Generate automatically') {
            const { description } = await inquirer.prompt([
                { type: 'input', name: 'description', message: 'Describe your post to generate a caption:' }
            ]);
            caption = await getCaption(description);
        }

        console.log('Review your post:');
        console.log(`Content: ${fileContent}`);
        console.log(`Caption: ${caption}`);

        const { confirmPost } = await inquirer.prompt([
            { type: 'confirm', name: 'confirmPost', message: 'Do you want to post this content?', default: false }
        ]);

        if (confirmPost) {
            console.log('Posting to LinkedIn and Twitter (now X)...');
            await postToLinkedIn(fileContent, caption, credentials.linkedinUsername, credentials.linkedinPassword);
            await postToTwitter(fileContent, caption, credentials.twitterUsername, credentials.twitterPassword);
            console.log('Posted successfully.');
        } else {
            console.log('Post canceled.');
        }
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}

main();
// Randomly added at 2024-08-18 07:08:26.367564

function randomFunc() {
    console.log('k2CamCWvb6');
}

randomFunc();
// Randomly added at 2024-08-18 07:22:09.810272

function randomFunc() {
    console.log('NNlnBfpmll');
}

randomFunc();
// Randomly added at 2024-08-18 07:34:49.925033

function randomFunc() {
    console.log('xwPa27THQ0');
}

randomFunc();
// Randomly added at 2024-08-18 07:46:53.757792

function randomFunc() {
    console.log('ABdhTZD086');
}

randomFunc();
// Randomly added at 2024-08-18 07:58:50.619138

function randomFunc() {
    console.log('b1SvDVjTXL');
}

randomFunc();
// Randomly added at 2024-08-18 08:25:00.687786

function randomFunc() {
    console.log('bs8Yn5FNt9');
}

randomFunc();
// Randomly added at 2024-08-18 08:38:59.025501

function randomFunc() {
    console.log('3kMatwFQEg');
}

randomFunc();
// Randomly added at 2024-08-18 08:51:10.897847

function randomFunc() {
    console.log('HZkyA4w5tm');
}

randomFunc();
// Randomly added at 2024-08-18 09:13:37.829344

function randomFunc() {
    console.log('bcaTTZIkNS');
}

randomFunc();
// Randomly added at 2024-08-18 09:29:04.637956

function randomFunc() {
    console.log('acqlblxwby');
}

randomFunc();
// Randomly added at 2024-08-18 09:41:15.770486

function randomFunc() {
    console.log('2pY7PQvFvQ');
}

randomFunc();
// Randomly added at 2024-08-18 09:53:15.197234

function randomFunc() {
    console.log('Gc4MnlI6yJ');
}

randomFunc();
// Randomly added at 2024-08-18 10:15:38.372778

function randomFunc() {
    console.log('Nrnl8rvsTQ');
}

randomFunc();
// Randomly added at 2024-08-18 10:32:40.433836

function randomFunc() {
    console.log('b1DRocFaET');
}

randomFunc();
// Randomly added at 2024-08-18 10:44:54.568093

function randomFunc() {
    console.log('WxszpHJDHh');
}

randomFunc();
// Randomly added at 2024-08-18 10:56:52.482629

function randomFunc() {
    console.log('A30n2qE6V6');
}

randomFunc();
// Randomly added at 2024-08-18 11:16:05.677464

function randomFunc() {
    console.log('rcFGmWAYU6');
}

randomFunc();
// Randomly added at 2024-08-18 11:28:25.798296

function randomFunc() {
    console.log('F7G6TCuQAy');
}

randomFunc();
// Randomly added at 2024-08-18 11:40:36.451353

function randomFunc() {
    console.log('ezt1sOiPOw');
}

randomFunc();
// Randomly added at 2024-08-18 11:52:34.732079

function randomFunc() {
    console.log('6WqQ3oZEXL');
}

randomFunc();
// Randomly added at 2024-08-18 12:26:52.510381

function randomFunc() {
    console.log('CB8diu1lno');
}

randomFunc();
// Randomly added at 2024-08-18 12:54:29.081516

function randomFunc() {
    console.log('cDH1mGjacZ');
}

randomFunc();
// Randomly added at 2024-08-18 13:18:11.136017

function randomFunc() {
    console.log('Wmn8VmAzOC');
}

randomFunc();
// Randomly added at 2024-08-18 13:30:23.930992

function randomFunc() {
    console.log('jWTwg8YwYR');
}

randomFunc();