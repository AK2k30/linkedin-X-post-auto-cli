import axios from 'axios';
import FormData from 'form-data';
import fs from 'fs';

const LINKEDIN_API_URL = 'https://api.linkedin.com/v2/shares';
const TWITTER_API_URL = 'https://api.twitter.com/1.1/statuses/update.json';

async function postToLinkedIn(content, caption, username, password) {
    try {
        console.log('Posting to LinkedIn...');
        let requestBody;

        if (fs.existsSync(content)) { // File path provided
            const form = new FormData();
            form.append('file', fs.createReadStream(content));
            const uploadResponse = await axios.post('https://api.linkedin.com/v2/assets?action=registerUpload', form, {
                headers: { ...form.getHeaders(), 'Authorization': `Bearer YOUR_LINKEDIN_ACCESS_TOKEN` }
            });

            requestBody = {
                content: {
                    contentEntities: [{ entityLocation: uploadResponse.data.uploadUrl }],
                    title: 'Your Title',
                },
                distribution: { linkedInDistributionTarget: {} },
                text: { text: caption }
            };
        } else { // Direct content
            requestBody = {
                content: {
                    contentEntities: [],
                },
                distribution: { linkedInDistributionTarget: {} },
                text: { text: content + '\n\n' + caption }
            };
        }

        await axios.post(LINKEDIN_API_URL, requestBody, {
            headers: { 'Authorization': `Bearer YOUR_LINKEDIN_ACCESS_TOKEN` }
        });

        console.log('Posted to LinkedIn successfully.');
    } catch (error) {
        throw new Error(`Failed to post to LinkedIn: ${error.message}`);
    }
}

async function postToTwitter(content, caption, username, password) {
    try {
        console.log('Posting to Twitter (now X)...');
        let status = content + '\n\n' + caption;

        if (fs.existsSync(content)) { // File path provided
            const form = new FormData();
            form.append('media', fs.createReadStream(content));
            const uploadResponse = await axios.post('https://upload.twitter.com/1.1/media/upload.json', form, {
                headers: { ...form.getHeaders(), 'Authorization': `Bearer YOUR_TWITTER_ACCESS_TOKEN` }
            });

            const mediaId = uploadResponse.data.media_id_string;
            status += `&media_ids=${mediaId}`;
        }

        await axios.post(TWITTER_API_URL, { status }, {
            headers: { 'Authorization': `Bearer YOUR_TWITTER_ACCESS_TOKEN` }
        });

        console.log('Posted to Twitter (now X) successfully.');
    } catch (error) {
        throw new Error(`Failed to post to Twitter (now X): ${error.message}`);
    }
}

export { postToLinkedIn, postToTwitter };