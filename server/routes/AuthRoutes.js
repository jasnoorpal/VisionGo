import express from "express";
import { login, signup, verifyUser } from "../controllers/AuthController.js"
import { signupValidation, loginValidation } from "../validations/joiValidations.js"
import { validateUser } from "../middlewares/Authentication.js";

const router = express.Router();

router.get('/', validateUser, verifyUser)
router.post('/signup', signupValidation, signup);
router.post('/login', loginValidation, login)


export default router;