import express from "express";
import { getSensors, getSensor, createSensor, updateSensor, deleteSensor } from "../controllers/sensors.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/", getSensors);
router.get("/:sensorId", getSensor);
router.post("/", createSensor);

/* UPDATE */
router.patch("/:sensorId", updateSensor);
export default router;