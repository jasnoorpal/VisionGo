import express from "express";
import { login, signup } from "../controllers/AuthController.js"
import { signupValidation, loginValidation } from "../validations/joiValidations.js"

const router = express.Router();


router.post('/signup', signupValidation, signup);
router.post('/login', loginValidation, login)


export default router;