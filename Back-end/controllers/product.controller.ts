import { Request, Response } from 'express';
import Phone from '../models/Phone.ts';
import ABSProduct from '../interfaces/abstratc_product.ts';

export default class ControllerAll extends ABSProduct {
  constructor() {
    super();
  }

  async GetAll(req: Request, res: Response): Promise<void> {
    try {
      const phones = await Phone.find();

      if (phones.length === 0) {
        res.status(404).json({ message: 'No products found' });
        return;
      }

      let response = [...phones];
      /* 
        add other products
      */
      res.status(200).json({ data: response });
    } catch (e) {
      console.error(`Error: ${e}`);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}
