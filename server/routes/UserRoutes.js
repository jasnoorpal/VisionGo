import express from "express";
import { userController } from '../controllers/UserController.js'
import { validateUser } from "../middlewares/Authentication.js";
const router = express.Router();




// router.get("/", userController)

router.get("/profile", validateUser, (req, res) => {
    res.json({
        message: "Protected route accessed",
        user: req.user
    });
});

export default router;