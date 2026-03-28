import mongoose from "mongoose";
import dotenv from "dotenv";
import Career from "../models/Career.js";
import { careerDetails } from "../CareerDetails.js";

dotenv.config();

const seedCareers = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        await Career.deleteMany({});

        await Career.insertMany(careerDetails);

        console.log("Careers seeded successfully!");
        process.exit(0);
    } catch (error) {
        console.error("Error seeding careers:", error);
        process.exit(1);
    }
};

seedCareers();