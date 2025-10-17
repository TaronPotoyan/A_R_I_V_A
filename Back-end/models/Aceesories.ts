import mongoose from 'mongoose';

const AccessorySchema = new mongoose.Schema(
    {
        type: { type: String, default: 'Accessory' },
        brand: { type: String, required: true },
        image: { type: String, required: true },
        description: { type: String },
        value: { type: Number, default: 0 },
    },
    {
        timestamps: true,
    },
);

const Accessory = mongoose.model('Accessory', AccessorySchema);

export default Accessory;
