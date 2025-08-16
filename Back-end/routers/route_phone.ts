import express from 'express';
import PhonesController from '../controllers/phone.controller.ts';

const phonesController = new PhonesController();
const route = express.Router();

route.get('/',
    phonesController.GetPhones
);


export default route;

