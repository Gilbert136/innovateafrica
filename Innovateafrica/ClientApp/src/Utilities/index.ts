//import moment from 'moment';
import { EntityStatus } from '../Enums/Enums';
import { ModelBaseType } from '../Types/Types';
//import AsyncStorage from '@react-native-async-storage/async-storage';

// export class Time {
//     public static format(date: moment.MomentInput, format?:string) : string{
//         return moment(date).format(format ?? 'MMMM Do YYYY, h:mm a')
//     };

//     public static toJson(date?: string) : string{
//         return new Date(date ?? new Date()).toJSON();
//     }
// }



// export class Storage {
//     public static async storeAsync(key: string, value: any): Promise<void> {
//         try {
//             value = typeof value === "string" ? value : JSON.stringify(value);
//             await AsyncStorage.setItem(key, value);
//         } catch (e) {}
//     }

//     public static async readAsync(key: string): Promise<any> {
//         try {
//             let value = await AsyncStorage.getItem(key);
//             return value != null ? typeof value === "string" ? JSON.parse(value) : value : null;
//         } catch (e) {}
//     }

//     public static async removeAsync(key: string): Promise<void> {
//         try {
//             let value = await AsyncStorage.removeItem(key);
//         } catch (e) {}
//     }

// }

export class GlobalAPI {
    public static GASME_BASE_API = `http://192.168.43.95:5000/api/v1`;
    public static GASME_AUTH_RELATIVE = `/Identity/auth`;
    public static GASME_AUTH_URL = `${GlobalAPI.GASME_BASE_API}${GlobalAPI.GASME_BASE_API}`;
}

export class Fetch {
    public static getInit() : RequestInit{
        return {
            mode: 'no-cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=utf-8'
            }, 
        };
    };

    private static _requestInit: RequestInit =  {
        mode: 'no-cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=utf-8'
        }, 
    }

    private static async _authorizationHeaderAsync() : Promise<RequestInit>{
        //let UserProperties = await Storage.readAsync("@user");
        let UserProperties = { token: "" };
        let headers  = {...Fetch._requestInit.headers, Authorization: `bearer ${UserProperties.token}` };
        return {...Fetch._requestInit, headers: headers };;
    }

    public static async getAsync(RequestUrl: RequestInfo | string, init?:RequestInit) : Promise<any>{
        // let authorizationHeader = init ?? await Fetch._authorizationHeaderAsync();
        let authorizationHeader = await Fetch._authorizationHeaderAsync();
        return fetch(RequestUrl, authorizationHeader);
    };

    public static async postAsync(RequestUrl: RequestInfo | string, data:any, init?:RequestInit) : Promise<Response>{
        // let authorizationHeader = init ?? await Fetch._authorizationHeaderAsync();
        let authorizationHeader = await Fetch._authorizationHeaderAsync();
        authorizationHeader.method = 'post';
        authorizationHeader.body = JSON.stringify(data);
        return fetch(RequestUrl, authorizationHeader);
    }
}

 export class ModelBase implements ModelBaseType {
    modifiedDate?: Date;
    createdDate?: Date;
    createdBy?: string;
    modifiedBy?: string;
    connectionId?: string | null;
    status?: EntityStatus;
}
