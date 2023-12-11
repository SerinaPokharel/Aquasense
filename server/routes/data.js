import express from "express";
import { sendData, getData } from "../controllers/dataController.js";

const router = express.Router();

router.post("/sendData", sendData);
router.get("/getData", getData);

export default router;
