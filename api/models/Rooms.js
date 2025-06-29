import mongoose from "mongoose";

const roomSchema = new mongoose.Schema(
  {
    hotel: {
      type: String,
      required: true,
      ref: "Hotel",
    },
    roomType: {
      type: String,
      required: true,
    },
    
      aminities: {
        type: [String],
        required: true,
      
    },
    images: {
      type: [{ type: String }],
      required: true,
    },
    isAvalible: {
      type: Boolean,
      default: true,
    },
    desc: {
      type: String,
      required: true,
    },

    pricePerNight: {
      type: Number,
      required: true,
    },
    maxPeople: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);
const Room = mongoose.model("Room", roomSchema);

export default Room;
