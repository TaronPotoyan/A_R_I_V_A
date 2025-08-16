import { Request, Response } from 'express';

abstract class ABSProduct {
    constructor() {}
    abstract GetAll(req: Request, res: Response): Promise<void>;
}

export default ABSProduct;
