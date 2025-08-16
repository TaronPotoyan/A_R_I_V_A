import express from 'express';
import PhonesController from '../controllers/phone.controller.ts';
import Middlware from '../middleware/MIdllwares.ts';

const phonesController = new PhonesController();
const midllwares = new Middlware();
const route = express.Router();

route.get('/', phonesController.Get);

route.get('/:id', phonesController.GetSpec);

route.post('/', midllwares.IsValidKey, phonesController.Post);

export default route;
