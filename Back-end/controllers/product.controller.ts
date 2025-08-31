import { Request, Response } from 'express';
import Phone from '../models/Phone.js';
import ABSProduct from '../interfaces/abstratc_product.js';
import { IPhone } from '../interfaces/phon.js';
import { IAccessory } from '../interfaces/aceesories.js';
import Accessory from '../models/Aceesories.js';

class ControllerAll extends ABSProduct {
    constructor() {
        super();
    }

    async GetAll(req: Request, res: Response): Promise<void> {
        try {
            const phones: IPhone[] = await Phone.find();
            const accesor: IAccessory[] = await Accessory.find();
            const response = [...phones, ...accesor];
            if (!phones || !accesor) {
                res.status(404).json({ message: 'Datas not found' });
            }
            res.status(200).json({ data: response });
        } catch (e) {
            console.error(`Error: ${e}`);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
}
export default new ControllerAll();
