import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    photos: {
      type: [String],
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
    },
    cheapestPrice: {
      type: Number,
      required: true,
    },

    rooms: {
      type: [String],
    },
    city: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);
const Hotel = mongoose.model("Hotel", hotelSchema);

export default Hotel;
