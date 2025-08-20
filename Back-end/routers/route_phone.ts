import express from 'express';
import PhonesController from '../controllers/phone.controller.js';
import Middlware from '../middleware/MIdllwares.js';

const phonesController = new PhonesController();
const midllwares = new Middlware();
const route_phone = express.Router();

route_phone.get('/', phonesController.Get);

route_phone.get('/:id', phonesController.GetSpec);

route_phone.post('/', midllwares.IsValidKey, phonesController.Post);

route_phone.delete('/:id', midllwares.IsValidKey, phonesController.Delete);

route_phone.patch('/:id', midllwares.IsValidKey, phonesController.Update);

export default route_phone;
