import { Request, Response } from 'express';

abstract class ABSPhones {
    constructor() {}

    abstract GetPhones(req: Request, res: Response): Promise<void>;
    
}

export default ABSPhones;