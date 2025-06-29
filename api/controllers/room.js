import { v2 as cloudinary } from "cloudinary";
import Hotel from "../models/hotels.js";
import Room from "../models/Rooms.js";
// This file contains the controller for room-related operations.
// api to create a new room
export const createRoom = async (req, res) => {
  try {
    const { roomType, pricePerNight, aminities } = req.body;

    const hotel = await Hotel.findOne({
      owner: req.auth.userId,
    }); /* check if the hotel exists */
    if (!hotel) {
      return res.status(404).json({ message: "Hotel not found" });
    }

    // upload images to cloudinary

    const uploadImages = req.files.map(async file => {
      const result = await cloudinary.uploader.upload(file.path);
      return result.secure_url;
    });

    // wait for all images to be uploaded
    const images = await Promise.all(uploadImages);

    const newRoom = await Room.create({
      hotel: hotel._id,
      roomType,
      pricePerNight: Number(pricePerNight),
      aminities: JSON.parse(aminities),
      images,
      isAvalible: true,
      maxPeople: req.body.maxPeople,
      desc: req.body.desc,
    });

    res.status(200).json({ message: "Room has been created", room: newRoom });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// api to get all rooms
export const getAllRooms = async (req, res) => {
  try {
    const rooms = await Room.find({ isAvalible: true }).populate({
      path: "hotel",
      populate: { path: "owner", select: "image" },
    }).sort({ createdAt: -1 });
    res.status(200).json({ success: true, rooms });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// api to get all rooms for a specific hotel
export const getHotelRooms = async (req, res) => {
  try {
    const hotelData = await Hotel.findOne({ owner: req.auth.userId });
    const rooms = await Room.find({ hotel: hotelData._id.toString()}).populate("hotel");
    res.status(200).json({ success: true, rooms });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// api to toggle availability of a room
export const toggleRoomAvailability = async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    if (!room) {
      return res.status(404).json({ message: "Room not found" });
    }
    room.isAvalible = !room.isAvalible;
    await room.save();
    res.status(200).json({ message: "Room availability has been toggled" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};