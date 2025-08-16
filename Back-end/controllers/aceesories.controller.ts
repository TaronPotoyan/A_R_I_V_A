import { Request, Response } from 'express';
import ABS from '../interfaces/abstratc _techniq.ts';
import type { IAccessory } from '../interfaces/aceesories.ts';
import Accessory from '../models/Aceesories.ts';
import { error, log } from 'console';
import mongoose from 'mongoose';

class ControllerAccessory extends ABS {
  constructor() {
    super();
  }
  async Get(req: Request, res: Response): Promise<void> {
    try {
      const accesors = await Accessory.find();
      if (accesors == undefined) {
        res.status(404).json({ message: 'not found' });
        return;
      }
      res.status(200).json({ data: accesors });
      return;
    } catch (e) {
      console.log(`Error ${e}`);
      res.status(500).json('Server error');
    }
  }

  async Post(req: Request, res: Response): Promise<void> {
    try {
      const accesor: IAccessory = req.body;
      const result = await new Accessory(accesor);
      await result.save();
      res.status(201).json({ message: 'Data Saved' });
      return;
    } catch (e) {
      console.error(`Error ${e}`);
      res.status(500).json({ message: 'Server error' });
    }
  }

  async GetSpec(req: Request, res: Response): Promise<void> {
    try {
      const { id: _id } = req.params;
      if (!mongoose.Types.ObjectId.isValid(_id)) {
        res.status(400).json({ message: 'Invalid ID format' });
        return;
      }
      const accesor: IAccessory | null = await Accessory.findById(_id);
      if (accesor === null) {
        res.status(404).json({ message: 'Data not found' });
        return;
      }
      res.status(200).json({ data: accesor });
      return;
    } catch (e) {
      console.error(`Error ${e}`);
      res.status(500).json({ message: 'Server error' });
    }
  }
}

export default ControllerAccessory;
