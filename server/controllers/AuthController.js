import User from "../Models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { successResponse, errorResponse } from "../utils/response.js"

export const verifyUser = async (req, res) => {
    try {
        return successResponse(
            res,
            "Authentic User",
            200,
            req.user
        )
    } catch (error) {
        return errorResponse(
            res,
            "Internal Server Error",
            500
        )
    }
}

export const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await User.findOne({ email });

        if (user) {
            return errorResponse(
                res,
                'User already Exists! Try Loggin in',
                409
            )
        }

        const userModel = new User({
            name, email, password
        })

        userModel.password = await bcrypt.hash(password, 10);

        const createdUser = await userModel.save()

        const jwtToken = jwt.sign(
            {
                name: createdUser.name,
                _id: createdUser._id,
            },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        )

        return successResponse(
            res,
            "User Signed Up Successfully!",
            201,
            {
                token: `Bearer ${jwtToken}`,
                email,
                name
            }
        )
    }
    catch (error) {
        return errorResponse(
            res,
            "Internal Server Error",
            500,
            error
        )
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return errorResponse(
                res,
                "Invalid email or password",
                403
            )
        }

        const isPassEqual = await bcrypt.compare(password, user.password);
        if (!isPassEqual) {
            return errorResponse(
                res,
                "Check Your Password!",
                403
            )
        }

        const jwtToken = jwt.sign(
            {
                name: user.name,
                _id: user._id,
            },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        )

        return successResponse(
            res,
            "User Logged In Successfully!",
            200,
            {
                token: `Bearer ${jwtToken}`,
                email,
                name: user.name
            }
        )

    } catch (error) {
        return errorResponse(
            res,
            "Internal Server Error",
            500,
            error.message
        )
    }
}