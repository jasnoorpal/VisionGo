import jwt from "jsonwebtoken";
import { errorResponse } from "../utils/response.js";

export const validateUser = (req, res, next) => {
    const auth = req.headers.authorization;

    if (!auth) {
        return errorResponse(
            res,
            "Unauthorized, JWT token is required",
            403
        );
    }

    try {
        let token = auth;
        if (auth.startsWith("Bearer ")) {
            token = auth.split(" ")[1];
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = {
            _id: decoded._id,
            name: decoded.name,
            ...decoded
        };

        next();
    } catch (error) {
        console.error("JWT Verification Error:", error.message);
        return errorResponse(
            res,
            "Unauthorized, JWT token is wrong or expired",
            401
        );
    }
};