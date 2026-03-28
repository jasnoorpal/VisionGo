import mongoose from "mongoose";


const resourceSchema = new mongoose.Schema({
    title: String,
    type: String,
    url: String,
    html: String,
    css: String,
});


const stepSchema = new mongoose.Schema({
    _id: String,
    title: String,
    type: String,
    duration: String,
    resources: [resourceSchema],
});


const moduleSchema = new mongoose.Schema({
    _id: String,
    title: String,
    description: String,
    duration: String,
    isLocked: {
        type: Boolean,
        default: true,
    },
    steps: [stepSchema],
    certificateAvailable: {
        type: Boolean,
        default: false,
    },
});

const careerSchema = new mongoose.Schema({
    _id: String,
    title: String,
    description: String,
    difficulty: String,
    estimatedDuration: String,
    skillsYouWillGain: [String],
    thumbnail: String,
    modules: [moduleSchema],
});

const Career = mongoose.model("Career", careerSchema);
export default Career;