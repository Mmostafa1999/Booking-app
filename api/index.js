import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import hotelsRoute from "./routes/hotels.js";
import roomRoute from "./routes/rooms.js";
import userRoute from "./routes/users.js";
import bookingRoute from "./routes/booking.js";
import { clerkMiddleware } from "@clerk/express";
import cookieParser from "cookie-parser";
import connectCloudinary from "./cloudinary.js";
import clerkWebhook from "./controllers/clerkWebhook.js";
const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO}/hotel-booking-app`);
    console.log("Connected to MongoDB");
  } catch (error) {
    throw error;
  }
};

// connect to cloudinary
connectCloudinary();

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected!");
});

mongoose.connection.on("connected", () => {
  console.log("MongoDB connected!");
});

app.use(express.json());

app.use(cookieParser());

app.use(clerkMiddleware());

// api to listen to clerk webhooks
app.use("/api/clerk", clerkWebhook);
// Middleware
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomRoute);
app.use("/api/booking", bookingRoute);

// Error handling middleware
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

const PORT = process.env.PORT || 8800;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
