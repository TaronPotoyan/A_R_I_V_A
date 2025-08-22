import mongoose from 'mongoose';

const BasketItemSchema = new mongoose.Schema({
    item: { type: mongoose.Schema.Types.ObjectId, required: true, refPath: 'basket.itemType' },
    itemType: { type: String, required: true, enum: ['Phone', 'Accessory'] },
    quantity: { type: Number, default: 1 },
});

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    googleId: { type: String },
    name: { type: String },
    picture: { type: String },
    basket: [BasketItemSchema],
});

const User = mongoose.model('User', UserSchema);
export default User;
