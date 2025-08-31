import express from 'express';
import ControllerAccessory from '../controllers/aceesories.controller.js';
import Middlwares from '../middleware/MIdllwares.js';

const route_aceesories = express.Router();
const middleware = new Middlwares();

route_aceesories.get('/', ControllerAccessory.Get);

route_aceesories.post('/', middleware.IsValidKey, ControllerAccessory.Post);

route_aceesories.get('/:id', ControllerAccessory.GetSpec);

route_aceesories.delete('/:id', middleware.IsValidKey, ControllerAccessory.Delete);

route_aceesories.patch('/:id', middleware.IsValidKey, ControllerAccessory.Update);

export default route_aceesories;
