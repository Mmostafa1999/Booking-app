import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    user: {
      type: String,
      required: true,
      ref: "User",
    },
    room: {
      type: String,
      required: true,
      ref: "Rooms",
    },
    hotel: {
      type: String,
      required: true,
      ref: "Hotel",
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    checkInDate: {
      type: Date,
      required: true,
    },
    checkOutDate: {
      type: Date,
      required: true,
    },
    guests: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "cancelled", "completed"],
      default: "pending",
    },
    paymentMethod: {
      type: String,
      required: true,
      default: "Pay On Arrival",
    },
    isPaid: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Booking = mongoose.model("Booking", bookingSchema);
export default Booking;
