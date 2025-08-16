import express from 'express';
import ControllerAccessory from '../controllers/aceesories.controller.js';
import Middlwares from '../middleware/MIdllwares.js';

const route_aceesories = express.Router();
const accesory = new ControllerAccessory();
const middleware = new Middlwares();

route_aceesories.get('/', accesory.Get);

route_aceesories.post('/', middleware.IsValidKey, accesory.Post);

route_aceesories.get('/:id', accesory.GetSpec);

export default route_aceesories;
