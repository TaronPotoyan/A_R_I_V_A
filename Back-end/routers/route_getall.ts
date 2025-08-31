import express from 'express';
import ControllerAll from '../controllers/product.controller.js';

const route = express.Router();

route.get('/', ControllerAll.GetAll);

export default route;
