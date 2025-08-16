import mongoose from 'mongoose';

const AccessorySchema = new mongoose.Schema({
  brand: { type: String, required: true },
  image: { type: String },
  value: { type: Number, default: 0 },
});

const Accessory = mongoose.model('Accessory', AccessorySchema);

export default Accessory;
