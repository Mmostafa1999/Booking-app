import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  desc: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },
  maxPeople: {
    type: Number,
    required: true,
  },
  roomNumbers: [
    {
      number: {
        type: Number,
        required: true,
      },
      unavailableDates: {
        type: [Date],
      },
    },
  ],
});
const Room = mongoose.model("Room", roomSchema);

export default Room;
