import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import route_phone from '../routers/route_phone.js';
import route_aceesories from '../routers/route_aceesories.js';

dotenv.config();

const MONGO_URL = process.env.MONGO_URI || 'mongodb://localhost:27017/mobix';
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

async function ConnectToDB() {
    try {
        await mongoose.connect(MONGO_URL);
        console.log('✅ MongoDB connected successfully');
        app.listen(PORT, () => {
            console.log(`🚀 Server is listening on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('❌ MongoDB connection error:', error);
        process.exit(1);
    }
}
ConnectToDB();

app.use('/phones', route_phone);
app.use('/aceesories', route_aceesories);
