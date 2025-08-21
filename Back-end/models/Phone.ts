import mongoose from 'mongoose';

const PhoneSchema = new mongoose.Schema(
    {
        type: { type: String, default: "Phone" },
        image: { type: String, required: true }, 
        model: { type: String, required: true },
        yearOfAnnouncement: { type: String },
        os: { type: String, required: true },
        screenType: { type: String },
        screenResolution: { type: String },
        frontCamera: { type: String, required: true },
        mainCamera: { type: String, required: true },
        ram: { type: String, required: true },
        storage: { type: String, required: true },
        chargingPortType: { type: String, required: true },
        weight: { type: String },
        shortDescription: { type: String },
        length: { type: String, required: true },
        value: { type: Number, required: true },
    },
    {
        timestamps: true,
    },
);

const Phone = mongoose.model('Phone', PhoneSchema);

export default Phone;
