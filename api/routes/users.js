// create an endpoingt to authenticate users
import express from "express";

import { getUserData, storeRecentSearchCities } from "./../controllers/user.js";
import { protect } from "./../middleware/authMiddleware.js";

const userRouter = express.Router();



// get all
userRouter.get("/", protect, getUserData);

// store the user recent search cities
userRouter.post("/store-recent-search", protect, storeRecentSearchCities);

export default userRouter;
