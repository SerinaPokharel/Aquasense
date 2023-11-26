import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
    phValue: {
        type: Number,
        required: true,
    },
    temperature: {
        type: Number,
        required: true,
    },
    waterClarity: {
        type: String,
        enum: ['clear', 'turbid', 'cloudy'],
        required: true,
    },
    waterConsumption: {
        type: Number,
        required: true,
    },
});

const Data = mongoose.model('Data', dataSchema);

export default Data;
