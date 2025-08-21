import express from 'express';
import ControllerAll from '../controllers/product.controller.js';

const route = express.Router();
const all = new ControllerAll();

route.get('/', all.GetAll);

export default route;
