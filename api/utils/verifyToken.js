import jwt from 'jsonwebtoken';
import { handleError } from "../utils/error.js";

// Function to verify JWT token
export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) {
    return next(handleError(401, "You are not authenticated!"));
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return next(handleError(403, "Token is not valid!"));
    }
    req.user = user;
    next();
  });
};

// Function to verify if the user is authenticated or is an admin
export const verifyUser = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return next(handleError(403, "You are not authorized!"));
    }
  });
};

// Function to verify if the user is an admin
export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return next(handleError(403, "You are not authorized!"));
    }
  });
}