import express from 'express';
import PhonesController from '../controllers/phone.controller.js';
import Middlware from '../middleware/MIdllwares.js';

const phonesController = new PhonesController();
const midllwares = new Middlware();
const route = express.Router();

route.get('/', phonesController.Get);

route.get('/:id', phonesController.GetSpec);

route.post('/', midllwares.IsValidKey, phonesController.Post);

export default route;
