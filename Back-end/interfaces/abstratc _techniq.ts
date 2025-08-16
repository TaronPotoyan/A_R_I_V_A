import { Request, Response } from 'express';

abstract class ABS {
  constructor() {}

  abstract Get(req: Request, res: Response): Promise<void>;
  abstract GetSpec(req: Request, res: Response): Promise<void>;
  abstract Post(req: Request, res: Response): Promise<void>;
}

export default ABS;
