import { Request, Response } from 'express';
import IPhone from '../models/Phone.ts';
import  ABSPhones from '../interfaces/abstratc _phons.ts';

export default class PhonesController extends ABSPhones {

  constructor() {
    super();
  }

  async GetPhones(req: Request, res: Response): Promise<void> {
    try {
      const phones = await IPhone.find();

      if (phones.length === 0) {
        res.status(404).json({ message: 'No phones found' });
        return;
      }

      res.status(200).json({ data: phones });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }


}
