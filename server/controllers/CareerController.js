import Career from "../models/Career.js";
import { successResponse, errorResponse } from "../utils/response.js";

export const getAllCareers = async (req, res) => {
    try {
        const includeModules = req.query.includeModules === 'true';

        let careers;
        if (includeModules) {
            careers = await Career.find({});
        } else {
            careers = await Career.find({}, "-modules");
        }

        return successResponse(
            res,
            "Fetched All Careers",
            200,
            careers
        );
    } catch (error) {
        console.error("Error fetching careers:", error);
        return errorResponse(
            res,
            "Error Fetching Careers",
            500,
            error.message
        );
    }
};

export const getCareerById = async (req, res) => {
    try {
        const { id } = req.params;

        const career = await Career.findById(id);

        if (!career) {
            return errorResponse(
                res,
                "Career Not Found",
                404
            );
        }

        return successResponse(
            res,
            "Career fetched successfully",
            200,
            career
        );
    } catch (error) {
        console.error("Error fetching career:", error);
        return errorResponse(
            res,
            "Error Fetching Career",
            500,
            error.message
        );
    }
};