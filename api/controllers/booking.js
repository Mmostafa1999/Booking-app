import Booking from "../models/booking.js";
import Hotel from "../models/hotels.js";
import Room from "./../models/Rooms.js";

// funcation to check the availability of the room
const checkRoomAvailability = async ({ room, checkInDate, checkOutDate }) => {
  try {
    const bookings = await Booking.find({
      room,
      checkInDate: { $lt: checkOutDate },
      checkOutDate: { $gt: checkInDate },
    });
    const isAvalible = bookings.length === 0;
    return isAvalible;
  } catch (err) {
    console.log(err.message);
  }
};

// api to check the availability of a room
// POST /api/booking/check-availability
export const checkRoomAvailabilityAPI = async (req, res) => {
  try {
    const { room, checkInDate, checkOutDate } = req.body;
    const isAvalible = await checkRoomAvailability({
      room,
      checkInDate,
      checkOutDate,
    });
    res.status(200).json({ success: true, isAvalible });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// api to create a new booking
// POST /api/booking/book
export const createBooking = async (req, res) => {
  try {
    const { room, checkInDate, checkOutDate, guests } = req.body;
    const user = req.user._id;
    // check if the room is avalible before creating a new booking
    const isAvalible = await checkRoomAvailability({
      room,
      checkInDate,
      checkOutDate,
    });
    if (!isAvalible) {
      return res
        .status(400)
        .json({ success: false, message: "Room is not avalible" });
    }
    // Get the totalPrice from the room
    const roomData = await Room.findById(room);

    // calculate the total price based on nights
    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);
    const timeDiff = checkOut.getTime() - checkIn.getTime();
    const nights = Math.ceil(timeDiff / (1000 * 3600 * 24));

    const totalPrice = roomData.pricePerNight * nights;

    const newBooking = await Booking.create({
      room,
      user,
      hotel: roomData.hotel._id.toString(),
      checkInDate,
      checkOutDate,
      totalPrice,
      guests: Number(guests),
    });
    res.status(200).json({ success: true, newBooking });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// api to get all booking for a specific user
// GET /api/booking/user
export const getUserBookings = async (req, res) => {
  try {
    const user = req.user._id;
    const bookings = await Booking.find({ user })
      .populate("room hotel")
      .sort({ createdAt: -1 });

    res.status(200).json({ success: true, bookings });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// api to get all booking for a specific hotel
// GET /api/booking/hotel
export const getHotelBookings = async (req, res) => {
  try {
    const user = req.auth.userId;
    const hotel = await Hotel.findById({ owner: user });
    if (!hotel) {
      return res.status(404).json({ message: "Hotel not found" });
    }

    const bookings = await Booking.find({ hotel: hotel._id.toString() })
      .populate("room hotel user")
      .sort({ createdAt: -1 });

    //   total number of bookings
    const totalBookings = bookings.length;

    const totalRevenue = bookings.reduce((total, booking) => {
      return total + booking.totalPrice;
    }, 0);

    res
      .status(200)
      .json({
        success: true,
        dashboardData: { totalBookings, totalRevenue, bookings },
      });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
