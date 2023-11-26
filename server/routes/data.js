import express from "express";
import { sendData } from "../controllers/dataController.js";

const router = express.Router();

router.post("/sendData", sendData);

export default router;
