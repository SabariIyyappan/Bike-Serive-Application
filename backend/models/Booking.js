const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  serviceName: { type: String, required: true },
  date: { type: Date, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  status: { type: String, enum: ['pending', 'ongoing', 'completed'], default: 'pending' },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
