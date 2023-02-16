// write an axios posr request to localhost:8000/submitAnswer containing the answer as a string
import axios from 'axios';

export const submitAnswer = async (answer: string) => {
    const response = await axios.post('http://localhost:8000/submitAnswer', {
        answer,
    });
    return response.data;
    }