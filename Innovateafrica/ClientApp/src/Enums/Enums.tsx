
export enum TransactionStatus {
    Pending = 1,
    Approve,
    Reject,
    Delivered,
}

export enum UnitClassification {
    Currency = 1,
    Mass,
}

export enum ReducerStatus {
    set = 1,
    get = 2,
}

export enum ScheduleBasis {
    PickUp = 1,
    Delivery,
}

export enum Day {
    Sunday = 1,
    Monday,
    Tuesday,
    Wednesday,
    Thurssday,
    Friday,
    Saturday,
}



/*STARTS*/
export enum EntityStatus {
    New = 1,
    Active,
    Delete,
    Remove
}
