import { NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();

class Middlwares {
  private static KEY: string | undefined = process.env.SECRET_KEY;
  constructor() {}
  async IsValidKey(req: Request, res: Response, next: NextFunction) {
    try {
      const { KEY } = req.body;

      if (Middlwares.KEY !== KEY) {
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
