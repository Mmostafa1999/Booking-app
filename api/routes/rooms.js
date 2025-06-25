// create an endpoingt to authenticate users
import express from 'express';
import {  verifyAdmin } from "../utils/verifyToken.js";
import { createRoom, updateRoom, deleteRoom, getRoom, getAllRooms } from './../controllers/room.js';

const router = express.Router();

 //craete 
router.post('/:hotelid',  verifyAdmin, createRoom);


// update
router.post('/:id/:hotelid', verifyAdmin, updateRoom);
// delete
router.delete('/:id/:hotelid', verifyAdmin, deleteRoom);


// get by id
router.get('/:id', getRoom);

// get all
router.get('/', getAllRooms);



export default router;