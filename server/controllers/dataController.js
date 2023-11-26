import Data from "../models/Data.js";

export const sendData = async (req, res) => {
    const data = req.body;

    try {
        const existingData = await Data.findOneAndUpdate(
            { /* your update criteria, possibly another unique identifier */ },
            {
                $set: {
                    phValue: data.phValue,
                    temperature: data.temperature,
                    waterClarity: data.waterClarity,
                    waterConsumption: data.waterConsumption,
                }
            },
            { new: true, upsert: true }
        );

        console.log('Data updated/inserted:', existingData);
        res.status(200).json({ message: 'Data received and stored in MongoDB', data: existingData });
    } catch (err) {
        console.error('Error updating/inserting data:', err);
        res.status(500).json({ error: 'Internal Server Error', message: err.message });
    }
};
