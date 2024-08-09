import axios from 'axios';

async function getCaption(description) {
    try {
        console.log('Generating caption...');
        const response = await axios.post('https://your-caption-generator-api.com/generate', { description });
        return response.data.caption;
    } catch (error) {
        throw new Error(`Failed to generate caption: ${error.message}`);
    }
}

export { getCaption };