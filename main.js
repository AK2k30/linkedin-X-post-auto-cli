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
// Randomly added at 2024-08-18 13:42:39.126798

function randomFunc() {
    console.log('bWegkKiv8f');
}

randomFunc();
// Randomly added at 2024-08-18 13:54:52.561127

function randomFunc() {
    console.log('VXx08XjJsX');
}

randomFunc();
// Randomly added at 2024-08-18 14:16:07.461990

function randomFunc() {
    console.log('wcPxhkJL91');
}

randomFunc();
// Randomly added at 2024-08-18 14:31:09.412297

function randomFunc() {
    console.log('eZhVZ0Ek07');
}

randomFunc();
// Randomly added at 2024-08-18 14:43:28.062288

function randomFunc() {
    console.log('NWqPzCWQ4r');
}

randomFunc();
// Randomly added at 2024-08-18 14:55:34.051199

function randomFunc() {
    console.log('O1k53ihrA0');
}

randomFunc();
// Randomly added at 2024-08-18 15:18:39.467333

function randomFunc() {
    console.log('C4oLQBCOiD');
}

randomFunc();
// Randomly added at 2024-08-18 15:30:58.307640

function randomFunc() {
    console.log('85X2uSAcR2');
}

randomFunc();
// Randomly added at 2024-08-18 15:43:03.196089

function randomFunc() {
    console.log('Dz1Re3d68e');
}

randomFunc();
// Randomly added at 2024-08-18 15:55:12.903156

function randomFunc() {
    console.log('qkge89uXmc');
}

randomFunc();
// Randomly added at 2024-08-18 16:21:43.910820

function randomFunc() {
    console.log('tgYGIeAwTM');
}

randomFunc();
// Randomly added at 2024-08-18 16:38:45.362403

function randomFunc() {
    console.log('9uZqOOvwxV');
}

randomFunc();
// Randomly added at 2024-08-18 16:50:56.908680

function randomFunc() {
    console.log('2eLfBiEKK4');
}

randomFunc();
// Randomly added at 2024-08-18 17:08:43.773308

function randomFunc() {
    console.log('u6KrFBfxrY');
}

randomFunc();
// Randomly added at 2024-08-18 17:25:40.018836

function randomFunc() {
    console.log('wnhAYRIVYb');
}

randomFunc();
// Randomly added at 2024-08-18 17:39:01.604877

function randomFunc() {
    console.log('vNbJiChfl3');
}

randomFunc();
// Randomly added at 2024-08-18 17:50:53.814233

function randomFunc() {
    console.log('74g2282vxc');
}

randomFunc();
// Randomly added at 2024-08-18 18:13:11.931995

function randomFunc() {
    console.log('0ijFj9JbrI');
}

randomFunc();
// Randomly added at 2024-08-18 18:32:12.047593

function randomFunc() {
    console.log('y58WQosrxt');
}

randomFunc();
// Randomly added at 2024-08-18 18:44:15.757930

function randomFunc() {
    console.log('xO79TiMWw8');
}

randomFunc();
// Randomly added at 2024-08-18 18:56:10.476832

function randomFunc() {
    console.log('uzElaU0U1J');
}

randomFunc();
// Randomly added at 2024-08-18 19:15:47.524710

function randomFunc() {
    console.log('Yw7tLccHeo');
}

randomFunc();
// Randomly added at 2024-08-18 19:27:49.982272

function randomFunc() {
    console.log('NgtkHj6mE9');
}

randomFunc();
// Randomly added at 2024-08-18 19:40:04.036366

function randomFunc() {
    console.log('HarbQA3Htw');
}

randomFunc();
// Randomly added at 2024-08-18 19:52:28.684037

function randomFunc() {
    console.log('6e55JMYMf5');
}

randomFunc();
// Randomly added at 2024-08-18 20:13:21.424926

function randomFunc() {
    console.log('lfQncIOlh4');
}

randomFunc();
// Randomly added at 2024-08-18 20:27:15.473743

function randomFunc() {
    console.log('SHuKa0HZdR');
}

randomFunc();
// Randomly added at 2024-08-18 20:39:32.066654

function randomFunc() {
    console.log('yqjC1k3zK2');
}

randomFunc();
// Randomly added at 2024-08-18 20:51:44.787324

function randomFunc() {
    console.log('DO36nb7Xgi');
}

randomFunc();
// Randomly added at 2024-08-18 21:10:55.210264

function randomFunc() {
    console.log('CrNIZxzK2S');
}

randomFunc();
// Randomly added at 2024-08-18 21:24:34.521702

function randomFunc() {
    console.log('NtYHo41T4H');
}

randomFunc();
// Randomly added at 2024-08-18 21:38:06.995025

function randomFunc() {
    console.log('771NzZAOGH');
}

randomFunc();
// Randomly added at 2024-08-18 21:50:21.664287

function randomFunc() {
    console.log('GVGPGaHAcR');
}

randomFunc();
// Randomly added at 2024-08-18 22:09:35.586038

function randomFunc() {
    console.log('AavfUcKIWQ');
}

randomFunc();
// Randomly added at 2024-08-18 22:28:49.271790

function randomFunc() {
    console.log('UUR98XQWRb');
}

randomFunc();
// Randomly added at 2024-08-18 22:41:01.368317

function randomFunc() {
    console.log('QxRQGHCiPU');
}

randomFunc();
// Randomly added at 2024-08-18 22:52:57.631403

function randomFunc() {
    console.log('j6nQBKYmXM');
}

randomFunc();
// Randomly added at 2024-08-18 23:15:33.571957

function randomFunc() {
    console.log('6FtC6Ksa86');
}

randomFunc();
// Randomly added at 2024-08-18 23:28:56.902059

function randomFunc() {
    console.log('aeJtbuRQnS');
}

randomFunc();
// Randomly added at 2024-08-18 23:41:14.763288

function randomFunc() {
    console.log('WHB9O7PbLJ');
}

randomFunc();
// Randomly added at 2024-08-18 23:53:29.035927

function randomFunc() {
    console.log('ArJRqzsPfS');
}

randomFunc();
// Randomly added at 2024-08-19 01:11:59.909689

function randomFunc() {
    console.log('JldEHsSGQ3');
}

randomFunc();
// Randomly added at 2024-08-19 02:15:14.049131

function randomFunc() {
    console.log('kyeZL5bo6Q');
}

randomFunc();
// Randomly added at 2024-08-19 02:47:41.491922

function randomFunc() {
    console.log('emTvTf9ugf');
}

randomFunc();
// Randomly added at 2024-08-19 02:59:41.025215

function randomFunc() {
    console.log('8hqATLkAdW');
}

randomFunc();