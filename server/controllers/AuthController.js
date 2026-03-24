import User from "../Models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
    try {
        console.log(req.body)
        const { name, email, password } = req.body;
        const user = await User.findOne({ email });

        if (user) {
            return res.status(409).json({
                message: 'User already Exists! Try Loggin in',
                Success: false
            })
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

        res.status(201).json({
            message: "User Signed Up Successfully!",
            success: true,
            token: `Bearer ${jwtToken}`,
            email,
            name
        })
    }
    catch (error) {
        res.status(500).json({
            message: `Internal Server Error: ${error}`,
            success: false
        })
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const errorMsg = "Invalid email or password";
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(403).json({
                message: errorMsg,
                Success: false
            })
        }

        const isPassEqual = await bcrypt.compare(password, user.password);
        if (!isPassEqual) {
            return res.status(403).json({
                message: errorMsg,
                Success: false
            })
        }

        const jwtToken = jwt.sign(
            {
                name: user.name,
                _id: user._id,
            },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        )



        res.status(200).json({
            message: "User Logged In Successfully!",
            success: true,
            token: `Bearer ${jwtToken}`,
            email,
            name: user.name
        })

    } catch (error) {
        res.status(500).json({
            message: `Internal Server Error: ${error}`,
            success: false
        })
    }
}