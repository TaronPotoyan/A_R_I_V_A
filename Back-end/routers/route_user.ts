import express from 'express';
import user_controller from '../controllers/user_controller.js';

const route_user = express.Router();

route_user.post('/google-login', user_controller.googleLogin);
route_user.post('/basket/get', user_controller.GetBasket);
route_user.post('/basket/set', user_controller.SetBasket);
route_user.post('/basket/remove', user_controller.RemoveBasket);
export default route_user;
