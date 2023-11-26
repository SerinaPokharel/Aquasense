import Sensor from "../models/Sensor.js";

export const postSensorData = async (req, res) => {
    try {
        // Find the document based on criteria (e.g., timestamp and userId)
        const existingData = await Sensor.findOneAndUpdate(
            { readingTimestamp: data.readingTimestamp, userId },
            {
                $set: {
                    pHValue: data.pHValue,
                    temperature: data.temperature,
                    waterClarity: data.waterClarity,
                    waterConsumption: data.waterConsumption,
                    userId,
                    // Add other user-related fields as needed
                },
            },
            { new: true, upsert: true } // Set upsert to true to insert if not found
        );

        res.status(200).json(existingData);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
