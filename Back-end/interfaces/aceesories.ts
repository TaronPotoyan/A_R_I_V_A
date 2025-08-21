export interface IAccessory {
    model: string;
    image: string;
    value: number;
    createdAt?: Date;
    updatedAt?: Date;
    _id: string | null | undefined;
    type : string;
}
