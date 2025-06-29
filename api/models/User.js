import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },

    image: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "owner"],
      default: "user",
    },
    recentSearchCities: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true /* adds createdAt and updatedAt fields */,
  },
);
const User = mongoose.model("User", userSchema);

export default User;
