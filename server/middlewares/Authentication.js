import jwt from "jsonwebtoken";
import { errorResponse } from "../utils/response.js";

export const validateUser = (req, res, next) => {
    const auth = req.headers.authorization;

    if (!auth) {
        return errorResponse(
            res,
            "Unauthorized, JWT token is required",
            403
        )
    }

    try {
        const token = auth.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded;
        next();
    } catch (error) {
        return errorResponse(
            res,
            "Unauthorized, JWT token is wrong or expired",
            401
        )
    }
};
