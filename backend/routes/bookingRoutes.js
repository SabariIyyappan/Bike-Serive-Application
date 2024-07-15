const express = require('express');
const router = express.Router();
const { createBooking, getBookingById, updateBookingStatus, getAllBookings } = require('../controllers/bookingController');

router.post('/', createBooking);
router.get('/:id', getBookingById);
router.put('/:id/status', updateBookingStatus);
router.get('/', getAllBookings);

module.exports = router;
