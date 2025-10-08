import { NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();

class Middlwares {
    private static KEY: string | undefined = process.env.SECRET_KEY?.trim();
    async IsValidKey(req: Request, res: Response, next: NextFunction) {
        try {
            let KEY: string | undefined = req.body.KEY || req.params.KEY;

            if (!KEY) {
                return res.status(400).json({ message: 'KEY is required' });
            }

            KEY = KEY.trim();

            if (Middlwares.KEY !== KEY) {
                console.log(`Invalid KEY: ${KEY}`);
                return res.status(401).json({ message: 'Invalid Request' });
            }

            next();
        } catch (e) {
            console.error(`Error in IsValidKey middleware: ${e}`);
            res.status(500).json({ message: 'Server error' });
        }
    }
}
export default Middlwares;
