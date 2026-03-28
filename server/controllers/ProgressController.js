import Progress from "../models/Progress.js";
import { successResponse, errorResponse } from "../utils/response.js";
export const getProgress = async (req, res) => {
    try {
        const { careerId } = req.params;
        const userId = req.user._id;

        const progress = await Progress.findOne({ userId, careerId });

        if (!progress) {
            return errorResponse(
                res,
                "No progress found for this career",
                404
            );
        }

        return successResponse(
            res,
            "Progress fetched successfully",
            200,
            progress
        );
    } catch (error) {
        console.error("Error fetching progress:", error);
        return errorResponse(
            res,
            "Error fetching progress",
            500,
            error.message
        );
    }
};

export const saveProgress = async (req, res) => {
    try {
        const {
            careerId,
            currentModuleIndex,
            currentStepIndex,
            completedSteps,
        } = req.body;

        const userId = req.user._id;

        if (!careerId) {
            return errorResponse(res, "Career ID is required", 400);
        }

        let progress = await Progress.findOne({ userId, careerId });

        if (progress) {
            progress.currentModuleIndex = currentModuleIndex !== undefined ? currentModuleIndex : progress.currentModuleIndex;
            progress.currentStepIndex = currentStepIndex !== undefined ? currentStepIndex : progress.currentStepIndex;
            progress.completedSteps = completedSteps || progress.completedSteps;
            progress.lastUpdated = new Date();
        } else {
            progress = new Progress({
                userId,
                careerId,
                currentModuleIndex: currentModuleIndex || 0,
                currentStepIndex: currentStepIndex || 0,
                completedSteps: completedSteps || [],
                startedAt: new Date(),
                lastUpdated: new Date()
            });
        }

        await progress.save();

        return successResponse(
            res,
            progress ? "Progress updated successfully" : "Progress created successfully",
            200,
            progress
        );
    } catch (error) {
        console.error("Error saving progress:", error);
        return errorResponse(
            res,
            "Error saving progress",
            500,
            error.message
        );
    }
};