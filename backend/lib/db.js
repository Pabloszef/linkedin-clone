import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
    try {
        const res = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected: ${res.connection.host}`)
    } catch (error) {
        console.log(`MongoDB connection error: ${error}`)
        process.exit(1)
    }
}