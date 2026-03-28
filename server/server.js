import express from "express";
import dotenv from "dotenv"
import { connectDB } from "./config/db.js";
import cors from "cors";

import AuthRoutes from "./routes/AuthRoutes.js"
import UserRoutes from "./routes/UserRoutes.js"
import CareerRoutes from "./routes/CareerRoutes.js"
import ProgressRoutes from "./routes/ProgressRoutes.js";

const app = express();
dotenv.config();


const PORT = process.env.PORT || 8080;


connectDB();

app.use(express.json());
app.use(cors())

app.use("/auth", AuthRoutes)
app.use("/careers", CareerRoutes)
app.use("/progress", ProgressRoutes);
app.use("/", UserRoutes)



app.listen(PORT, () => {
    console.log(`Server is listening on port http://localhost:${PORT}`);
})