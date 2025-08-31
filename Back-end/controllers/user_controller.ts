import User from '../models/User.js';
import { Request, Response } from 'express';
import { OAuth2Client } from 'google-auth-library';
import mongoose from 'mongoose';

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

class ControllerUser {
    async googleLogin(req: Request, res: Response): Promise<void> {
        try {
            const { token } = req.body as { token: string };
            if (!token) {
                res.status(400).json({ message: 'No token provided' });
                return;
            }

            const ticket = await client.verifyIdToken({
                idToken: token,
                audience: process.env.GOOGLE_CLIENT_ID,
            });

            const payload = ticket.getPayload();

            if (!payload) {
                res.status(401).json({ message: 'Invalid Google token' });
                return;
            }

            let user = await User.findOne({ email: payload.email });
            
            if (!user) {
                user = new User({
                    email: payload.email,
                    googleId: payload.sub,
                    name: payload.name,
                    picture: payload.picture,
                    basket: [],
                });
                await user.save();
            }

            res.json({ message: 'Google login successful', user, token });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Google login failed', error });
        }
    }

    async GetBasket(req: Request, res: Response) {
        try {
            const { userId } = req.body as { userId: string };
            if (!userId) return res.status(400).json({ message: 'No userId provided' });

            const user = await User.findById(userId).populate('basket.item');
            if (!user) return res.status(404).json({ message: 'User not found' });

            res.json({ basket: user.basket });
        } catch (e) {
            console.error(e);
            res.status(500).json({ message: 'Failed to get basket', error: e });
        }
    }

    async SetBasket(req: Request, res: Response) {
        try {
            const { userId, productId, type } = req.body as {
                userId: string;
                productId: string;
                type: 'Phone' | 'Accessory';
            };

            if (!userId || !productId || !type)
                return res.status(400).json({ message: 'userId, productId and type required' });

            const user = await User.findById(userId);
            if (!user) return res.status(404).json({ message: 'User not found' });

            user.basket.push({ item: productId, itemType: type });

            await user.save();
            await user.populate('basket.item');

            res.json({ message: 'Product added to basket', basket: user.basket });
        } catch (e) {
            console.error(e);
            res.status(500).json({ message: 'Failed to set basket', error: e });
        }
    }

    async RemoveBasket(req: Request, res: Response) {
        try {
            const { userId, productId } = req.body as { userId: string; productId: string };
            if (!userId || !productId) {
                return res.status(400).json({ message: 'userId and productId required' });
            }

            const user = await User.findById(userId).populate('basket.item');
            if (!user) return res.status(404).json({ message: 'User not found' });

            const basketItem = user.basket.find((b: any) => {
                console.log(b);
                const itemId = b._id;
                return itemId.toString() === productId;
            });
            if (!basketItem) {
                console.log(basketItem);
                return res.status(404).json({ message: 'Product not in basket' });
            }

            if (basketItem.quantity > 1) {
                basketItem.quantity -= 1;
            } else {
                user.basket.pull({ _id: basketItem._id });
            }

            await user.save();
            await user.populate('basket.item');

            res.json({
                message: 'Product removed from basket',
                basket: user.basket,
            });
        } catch (e) {
            console.error(e);
            res.status(500).json({
                message: 'Failed to remove from basket',
                error: e,
            });
        }
    }
}

export default new ControllerUser();
