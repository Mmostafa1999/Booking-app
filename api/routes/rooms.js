import express from "express";
import { createRoom, getAllRooms, getHotelRooms, toggleRoomAvailability } from "../controllers/room.js";
import { protect } from "./../middleware/authMiddleware.js";
import upload from './../middleware/uploadMiddleware.js';
const roomRouter = express.Router();

// create room
roomRouter.post("/", upload.array("images", 5), protect, createRoom);
// get rooms
roomRouter.get("/", getAllRooms);
//  get rooms for a specific hotel (owner)
roomRouter.get("/owner", protect, getHotelRooms);
// toggle avallibility of a room
roomRouter.post("/:id", protect, toggleRoomAvailability);

export default roomRouter;
