
import { Configuration, OpenAIApi } from "openai";



export class OpenAI {
    orgId: string;
    apiKey: string;
    congiguration: Configuration;
    API: OpenAIApi;
    constructor(orgId: string, apiKey: string) {
        this.orgId = orgId;
        this.apiKey = apiKey;
        this.congiguration = new Configuration({
            organization: this.orgId,
            apiKey: this.apiKey,
        });
        this.API = new OpenAIApi(this.congiguration);
    }

    public evaluateRuntime = async (answer: string) => {

        const response = await this.API.createCompletion({
            model: "text-davinci-003",
            prompt: `${answer}\n\"\"\"\nHere is the space time complexity of this function with some explanation in less that 100 words in this json response format: {"time": "", "space": "", "explanation": ""}`,
            temperature: 0,
            max_tokens: 128,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
          });
        
        return response.data.choices[0].text;
        
    }
}
