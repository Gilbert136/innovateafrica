import { EntityStatus, ReducerStatus } from '../../Enums/Enums';
import { IdeaType, IdeaBaseType } from '../../Types/Types';
import { ModelBase } from '../../Utilities';

import { Comment } from '../CommentComponent/Comment'
import { User } from '../UserComponent/User'
import { Document } from '../DocumentComponent/Document'


export interface IIdeaBase extends IdeaBaseType {};

export class IdeaBase extends ModelBase implements IIdeaBase {
    id: number;
    name?: string;
    description?: string;
    alias?: string;
    star?: number;
    status?: EntityStatus;

    constructor() { 
        super();
        this.id = 0;
        this.name = "";
        this.alias = "";
        this.description = "";
        this.star = 0;
        this.status  = EntityStatus.New;
    }
}

export interface IIdea extends IdeaType {
    comment?: Comment[];
    contributor?: User[];
    document?: Document[];
};

export class Idea extends IdeaBase implements IIdea {
    comment?: Comment[];
    contributor?: User[];
    document?: Document[];

    constructor() { 
        super();

        // this.unitId = 0;
        // this.unit = new Unit();
        // this.currencyId = 0;
        // this.currency = new Currency();
    }

    public static Default: Idea = new Idea();

    public static Find(route:IIdea, data:IIdea[]): IIdea {
        let result:IIdea;
        switch(route.status){
            case EntityStatus.New:
                result = route;
                break;
            case EntityStatus.Active:
                result = data.find(x => x.id === route.id) ?? new Idea();
                break;
            default:
                result = new Idea();
                break;
        }
        return result;
    }
}


export const IdeaReducer = (state: any, action: any) => {
    switch(action.type){
        case ReducerStatus.set:
            let  data: IIdea = {...state, ...action.value};
            return data;
        default:
            return state;
    }
}
