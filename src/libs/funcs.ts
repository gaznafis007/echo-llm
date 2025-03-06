import axios from 'axios';

export async function sendMessage(message: string): Promise<string> {
    try {
        const response = await axios.post('https://api.echogpt.live/v1/chat/completions', {
            messages: [{ role: 'system', content: message }],
            "model": "EchoGPT"
        }, {
            headers: { 'x-api-key': process.env.NEXT_PUBLIC_API_KEY, 'Content-Type': 'application/json' }
        });
        return response.data?.choices[0]?.message?.content;
    } catch (error) {
        console.error(error);
        throw error;
    }
}