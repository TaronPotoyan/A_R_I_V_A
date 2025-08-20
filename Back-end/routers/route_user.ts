import express from "express";
import user_controller from "../controllers/user_controller.js";

const route_user = express.Router();

route_user.post("/google-login", user_controller.googleLogin);


export default route_user;
