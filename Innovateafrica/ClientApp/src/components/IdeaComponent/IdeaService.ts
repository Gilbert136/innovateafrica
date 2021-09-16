import { ResponseType } from '../../Types/Types';
import { Idea, IIdea } from './Idea';
import { GlobalAPI, Fetch } from '../../Utilities';

export class IdeaService {

    private static URL = `${GlobalAPI.GASME_BASE_API}/idea`;

    public static async getsAsync(config?: any): Promise<ResponseType> {
        let response = await Fetch.getAsync(IdeaService.URL, config);
        return response.json();
    }

    public static async getAsync(data : number): Promise<ResponseType> {
        let response = await Fetch.getAsync(`${IdeaService.URL}/${data}`);
        return response.json();
    }

    public static async saveAsync(data : Array<IIdea>): Promise<ResponseType> {
        let response = await Fetch.postAsync(IdeaService.URL, data);
        return response.json();
    }
}