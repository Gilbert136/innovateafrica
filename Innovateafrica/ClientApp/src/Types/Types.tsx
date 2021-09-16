import { EntityStatus, TransactionStatus, UnitClassification, ScheduleBasis, Day } from '../Enums/Enums'

  export type ResponseType = {
    state?: string;
    message?: string;
    data?: any;
  }



  export type UserBaseType = {
    id:number;
    telephone?: string;
    password?: string;
    email?: string;
    username?: string;
    firstName?: string;
    lastName?: string;
    otherName?: string;
    token?: string;
    refreshToken?: string;
    identityUser?: any;
  };
  export type UserType = UserBaseType & ModelBaseType;

  export type UnitBaseType = {
    id:number;
    name?: string;
    alias?: string;
    classification?: UnitClassification;
    description?: string;
  }
  export type UnitType = UnitBaseType & ModelBaseType;


  export type CurrencyBaseType = {
    id:number;
    name?: string;
    alias?: string;
    rate?: number;
    description?: string;
  }
  export type CurrencyType = CurrencyBaseType & ModelBaseType;


  export type CapacityBaseType = {
    id:number;
    value?:number;
    price?:number;
    name?: string;
    alias?: string;
    description?: string;
  }
  export type CapacityType = CapacityBaseType & ModelBaseType;

  export type ScheduleBaseType = {
    id:number;
    name?: string;
    alias?: string;
    scheduleDate?: Date;
    startDate?: Date;
    endDate?: Date;
    time?: Date;
    scheduleBasis?: ScheduleBasis;
    peridDays?: Array<Day>;
    description?: string;
  }
  export type ScheduleType = ScheduleBaseType & ModelBaseType;




  /*STARTS*/
  export type BaseType =  {
    id: number; 
    name?: string;
    alias?: string;
    description?: string;
  }

  export type ModelBaseType = {
    createdDate?: Date;
    modifiedDate?: Date; 
    createdBy?: string;
    modifiedBy?: string;
    connectionId?: string | null;
    status?: EntityStatus
  }


  export type IdeaBaseType = { 
    star?: number;
  }
  export type IdeaType = IdeaBaseType & BaseType & ModelBaseType;

