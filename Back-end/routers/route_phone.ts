import express from 'express';
import PhonesController from '../controllers/phone.controller.js';
import Middlware from '../middleware/MIdllwares.js';

const midllwares = new Middlware();
const route_phone = express.Router();

route_phone.get('/', PhonesController.Get);

route_phone.get('/:id', PhonesController.GetSpec);

route_phone.post('/', midllwares.IsValidKey, PhonesController.Post);

route_phone.delete('/:id', midllwares.IsValidKey, PhonesController.Delete);

route_phone.patch('/:id', midllwares.IsValidKey, PhonesController.Update);

export default route_phone;
