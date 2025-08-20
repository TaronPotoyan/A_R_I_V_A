import User from "../models/User.js";
import { Request, Response } from "express";
import { OAuth2Client } from "google-auth-library";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

class ControllerUser {
    async googleLogin(req: Request, res: Response): Promise<void> {
        try {
            const { token } = req.body as { token: string };

            if (!token) {
                res.status(400).json({ message: "No token provided" });
                return;
            }

            const ticket = await client.verifyIdToken({
                idToken: token,
                audience: process.env.GOOGLE_CLIENT_ID,
            });

            const payload = ticket.getPayload();
            if (!payload) {
                res.status(401).json({ message: "Invalid Google token" });
                return;
            }

            let user = await User.findOne({ email: payload.email });
            console.log(user)
            if (!user) {
                user = new User({
                    email: payload.email,
                    googleId: payload.sub,
                    name: payload.name,
                    picture: payload.picture,
                });
                await user.save();
            }

            res.json({
                message: "Google login successful",
                user,
                token, 
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Google login failed", error });
        }
    }


}

export default new ControllerUser();
