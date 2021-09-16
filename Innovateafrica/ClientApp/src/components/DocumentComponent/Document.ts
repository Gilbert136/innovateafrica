import { EntityStatus, ReducerStatus } from '../../Enums/Enums';
import { IdeaType, IdeaBaseType } from '../../Types/Types';
import { ModelBase } from '../../Utilities';


export interface IDocument extends IdeaBaseType {};

export class IdeaBase extends ModelBase implements IDocument {
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
    //unitId?: number;
    //currencyId?: number;
    //unit?: Unit;
    //currency?: Currency;
};

export class Document extends IdeaBase implements IDocument {
    // unitId?: number;
    // currencyId?: number;
    // unit: Unit;
    // currency?: Currency;

    constructor() { 
        super();

        // this.unitId = 0;
        // this.unit = new Unit();
        // this.currencyId = 0;
        // this.currency = new Currency();
    }

    public static Default: Document = new Document();

    public static Find(route:IIdea, data:IIdea[]): IIdea {
        let result:IIdea;
        switch(route.status){
            case EntityStatus.New:
                result = route;
                break;
            case EntityStatus.Active:
                result = data.find(x => x.id === route.id) ?? new Document();
                break;
            default:
                result = new Document();
                break;
        }
        return result;
    }
}


export const IdeaReducer = (state: any, action: any) => {
    switch(action.type){
        case ReducerStatus.set:
            let  data: IDocument = {...state, ...action.value};
            return data;
        default:
            return state;
    }
}
