import mongoose from "mongoose";

const progressSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    careerId: {
        type: String,
        ref: "Career",
        required: true
    },
    currentModuleIndex: {
        type: Number,
        default: 0,
    },
    currentStepIndex: {
        type: Number,
        default: 0,
    },
    completedSteps: [
        {
            type: String,
        },
    ],
    startedAt: {
        type: Date,
        default: Date.now,
    },
    lastUpdated: {
        type: Date,
        default: Date.now,
    }
});

progressSchema.index({ userId: 1, careerId: 1 }, { unique: true });

const Progress = mongoose.model("Progress", progressSchema);
export default Progress;