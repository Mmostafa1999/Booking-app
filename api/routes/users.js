// create an endpoingt to authenticate users
import express from "express";
import {
  updateUser,
  getAllUsers,
  getUser,
  deleteUser,
} from "../controllers/user.js";

import { verifyUser, verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication", (req, res, next) => {
//   res.send("Hello, you are authenticated!");
// });

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send("Hello, you are logged in and can delete your account!");
// });

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//   res.send("Hello, you are an admin and can delete all accounts!");
// });

// update
router.post("/:id", verifyUser, updateUser);
// delete
router.delete("/:id", verifyUser, deleteUser);

// get by id
router.get("/:id", verifyUser, getUser);

// get all
router.get("/", verifyAdmin, getAllUsers);

export default router;
