// waterMeter.js
import mongoose from 'mongoose';

const WaterMeterSchema = new mongoose.Schema({
    serialNumber: {
        type: String,
        required: true,
        unique: true,
    },
    manufacturer: {
        type: String,
        required: true,
    },
    // Add other relevant fields for your WaterMeter model
});

const WaterMeter = mongoose.model('WaterMeter', WaterMeterSchema);

export default WaterMeter;
