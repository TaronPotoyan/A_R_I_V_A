import { NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();

class Middlwares {
  private KEY: string | undefined;
  constructor() {
    this.KEY = process.env.SECRET_KEY;
  }
  async IsValidKey(req: Request, res: Response, next: NextFunction) {
    try {
      const { KEY } = req.params;
      if (!KEY || this.KEY !== KEY) {
        return res.status(401).json({ message: 'Invalid Request' });
      }
      next();
    } catch (e) {
      console.log(`Error ${e}`);
      return;
    }
  }
}

export default Middlwares;
