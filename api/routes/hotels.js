// create an endpoingt to authenticate users
import express from "express";
import { protect } from './../middleware/authMiddleware.js';
import { registerHotel } from "../controllers/hotel.js";

const hotelRouter = express.Router();

// create hotel 
hotelRouter.post("/", protect, registerHotel);

export default hotelRouter;
