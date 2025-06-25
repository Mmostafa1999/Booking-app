// create an endpoingt to authenticate users
import express from 'express';
import { craeteHotel, getAllHotels, getHotel, deleteHotel, updateHotel } from '../controllers/hotel.js';
import {  verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// craete 
router.post('/',  verifyAdmin, craeteHotel);


// update
router.post('/:id', verifyAdmin, updateHotel);
// delete
router.delete('/:id', verifyAdmin, deleteHotel);


// get by id
router.get('/:id', getHotel);

// get all
router.get('/', getAllHotels);

export default router;