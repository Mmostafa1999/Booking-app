import Hotel from "../models/Hotels.js";

// This file contains the controller for hotel-related operations.

// craeteHotel
export const craeteHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body); // Assuming Hotel is a Mongoose model

  try {
    const savedHotel = await Hotel.create(newHotel);
    res.status(200).json(savedHotel);
  } catch (err) {
    next(err);
  }
};

// register hotel function
export const registerHotel = async (req, res, next) => {
  try {
    const { name, city, address, desc, photos, rating, rooms, cheapestPrice } =
      req.body;

    if (req.user.role !== "owner") {
      return res.status(403).json({
        success: false,
        message: "You are not authorized to register a hotel",
      });
    }

    const existingHotel = await Hotel.findOne({ owner: req.user.id });
    if (existingHotel) {
      return res.status(400).json({
        success: false,
        message: "You have already registered a hotel",
      });
    }

    await Hotel.create({
      name,
      city,
      address,
      desc,
      photos,
      rating,
      rooms,
      cheapestPrice,
      owner: req.user.id,
    });

    res.status(200).json({
      success: true,
      message: "Hotel registered successfully",
    });
  } catch (err) {
    next(err);
  }
};

// updateHotel
export const updateHotel = async (req, res, next) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body } /* $set operator is used to update the document */,
      {
        new: true,
      } /*this option returns the updated document instead of the original document */,
    );
    res.status(200).json(updatedHotel);
  } catch (err) {
    next(err);
  }
};

// deleteHotel
export const deleteHotel = async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Hotel has been deleted" });
  } catch (err) {
    next(err);
  }
};

// getHotel
export const getHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (err) {
    next(err);
  }
};
// getAllHotels
export const getAllHotels = async (req, res, next) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json(hotels);
  } catch (err) {
    next(err);
  }
};
