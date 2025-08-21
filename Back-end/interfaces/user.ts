import { IPrdouct } from './product.js';

export interface IUser {
    email: string;
    password?: number;
    basket: IPrdouct[];
}
