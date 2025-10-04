import { NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();

class Middlwares {
    private static KEY: string | undefined = process.env.SECRET_KEY?.trim();
    constructor() {}
    async IsValidKey(req: Request, res: Response, next: NextFunction) {
        try {
            let KEY : string  = req.body.KEY;
            KEY = KEY.trim();

            console.log(Middlwares.KEY);
            if (Middlwares.KEY !== KEY) {
                console.log(KEY)
                return res.status(401).json({ message: 'Invalid Request' });
            }
            next();

        } catch (e) {
            console.log(`Error ${e}`);
            res.status(500).json({ message: 'Server error' });
            return;
        }
    }
}

export default Middlwares;
