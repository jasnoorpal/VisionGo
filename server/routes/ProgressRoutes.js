import express from "express";
import {
    saveProgress,
    getProgress,
} from "../controllers/ProgressController.js";

import { validateUser } from "../middlewares/Authentication.js";

const router = express.Router();

router.get("/:careerId", validateUser, getProgress);
router.post("/", validateUser, saveProgress);

export default router;