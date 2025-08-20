import { Request, Response } from 'express';
import ABS from '../interfaces/abstratc _techniq.js';
import { IPhone } from '../interfaces/phon.js';
import Phone from '../models/Phone.js';
import mongoose from 'mongoose';

export default class PhonesController extends ABS {
    constructor() {
        super();
    }

    async Get(req: Request, res: Response): Promise<void> {
        try {
            const phones = await Phone.find();

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

    async GetSpec(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;

            if (!mongoose.Types.ObjectId.isValid(id)) {
                res.status(400).json({ message: 'Invalid ID format' });
                return;
            }

            const specPhone: IPhone | null = await Phone.findById({ _id: id });

            if (!specPhone) {
                res.status(404).json({ message: 'Phone not found' });
                return;
            }

            res.status(200).json(specPhone);
        } catch (e) {
            console.error(`Error: ${e}`);
            res.status(500).json({ message: 'Server error' });
        }
    }

    async Post(req: Request, res: Response): Promise<void> {
        try {
            const phone: IPhone = req.body;
            const createdPhone = await Phone.create(phone);
            res.status(201).json({
                message: '📱 Phone created successfully',
            });
        } catch (e) {
            console.log(`Error ${e}`);
            res.status(500).json({ message: 'Server error' });
        }
        return;
    }

    async Delete(req: Request, res: Response): Promise<void> {
        try {
            const { id: _id } = req.params;
            const phone: IPhone | null = await Phone.findById(_id);
            if (phone === null) {
                res.status(404).json({ message: 'Not found product' });
                return;
            }
            const result = await Phone.findByIdAndDelete(_id);
            if (!!result) {
                res.status(200).json({ message: 'Deleted' });
                return;
            } else {
                res.status(400).json({ message: 'Can not delete' });
            }
        } catch (e) {
            console.error(`Error ${e}`);
            res.status(500).json({ message: 'Server error' });
        }
    }

    async Update(req: Request, res: Response): Promise<void> {
        try {
            const phoneData = req.body;
            const { id } = req.params;

            if (!phoneData || !id) {
                res.status(400).json({ message: 'Bad request' });
                return;
            }

            const updatedPhone = await Phone.findByIdAndUpdate(id, phoneData, { new: true });

            if (!updatedPhone) {
                res.status(404).json({ message: 'Phone not found' });
                return;
            }

            res.status(200).json(updatedPhone);
        } catch (e) {
            console.log(`Error ${e}`);
            res.status(500).json({ message: 'Server error' });
        }
    }
}