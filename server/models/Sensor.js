import mongoose from 'mongoose';

const SensorSchema = new mongoose.Schema({
    meterId: {
        type: String,
        required: true,
        unique: true,
    },
    monthlyBill: {
        type: Number,
        default: 0,
    },
    pHValue: {
        type: Number,
        required: true,
    },
    waterClarity: {
        type: String,
        enum: ['clear', 'turbid', 'cloudy'], // Adjust based on your clarity categories
        required: true,
    },
    temperature: {
        type: Number,
        required: true,
    },
    readingTimestamp: {
        type: Date,
        default: Date.now,
    },
});

const Sensor = mongoose.model('Sensor', SensorSchema);

export default Sensor;
