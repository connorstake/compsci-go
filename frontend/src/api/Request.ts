
import axios from 'axios';

export default class Request {
    private url: string;
    constructor(url: string) {
        this.url = url;
    }

    async post(data: any) {
        const response = await axios.post(this.url, data);
        return response.data;
    }

    async get() {
        const response = await axios.get(this.url);
        return response.data;
    }

    async put(data: any) {
        const response = await axios.put(this.url, data);
        return response.data;
    }

    async delete() {
        const response = await axios.delete(this.url);
        return response.data;
    }
}