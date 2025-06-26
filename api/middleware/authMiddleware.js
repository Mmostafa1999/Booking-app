import User from "../models/User.js";
import { handleError } from "../utils/error.js";

// protect routes
export const protect = async (req, res, next) => {

    const {user} = req.auth;

    if (!user) {
        return next(handleError(401, "You are not authenticated!"));
    } else {
        req.user = await User.findById(user.id);
        next();
    }
}