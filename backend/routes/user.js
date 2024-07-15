// routes/user.js

const express = require('express');
const User = require('../models/User');
const Booking = require('../models/Booking');
const router = express.Router();
const authMiddleware = require('../middleware/auth');

router.get('/:id', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user' });
  }
});

router.get('/bookings/:userId', authMiddleware, async (req, res) => {
  try {
    const bookings = await Booking.find({ userId: req.params.userId });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching bookings' });
  }
});

module.exports = router;
