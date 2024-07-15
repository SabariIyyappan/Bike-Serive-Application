const nodemailer = require('nodemailer');
const Booking = require('../models/Booking');
const sendMessage = require('../utils/sendMessage'); // Placeholder for message sending function

// Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// Function to send an email upon booking completion
const sendCompletionEmail = (email, booking) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Booking Completed',
        text: `Your booking for the service ${booking.serviceName} on ${new Date(booking.date).toLocaleDateString()} has been completed.`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
};

// Create a new booking and send email notifications
const createBooking = async (req, res) => {
    const { serviceName, date, email, phone } = req.body;
    const userId = req.user ? req.user._id : null;

    try {
        if (!serviceName || !date || !email || !phone) {
            return res.status(400).json({ message: 'All fields (serviceName, date, email, phone) are required' });
        }

        const newBooking = new Booking({
            serviceName,
            date,
            email,
            phone,
            status: 'pending',
            userId: userId || undefined,
        });

        await newBooking.save();

        // Send email to the admin
        const adminMailOptions = {
            from: process.env.EMAIL_USER,
            to: 'swethav.21it@kongu.edu',
            subject: 'New Booking Created',
            text: `A new booking has been created.\n\nService Name: ${serviceName}\nDate: ${date}\nEmail: ${email}\nPhone: ${phone}`,
        };

        await transporter.sendMail(adminMailOptions);

        // Send confirmation email to the user
        const userMailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Booking Confirmation',
            text: `Your booking has been created successfully.\n\nService Name: ${serviceName}\nDate: ${date}\nPhone: ${phone}`,
        };

        await transporter.sendMail(userMailOptions);

        // Send SMS confirmation to the user
        await sendMessage(phone, `Your booking for ${serviceName} on ${new Date(date).toLocaleDateString()} has been confirmed.`);

        res.status(201).json({ message: 'Booking created successfully', booking: newBooking });
    } catch (error) {
        console.error('Error creating booking and sending email:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Update booking status by ID and send email if completed
const updateBookingStatus = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    try {
        if (!status) {
            return res.status(400).json({ message: 'Status is required' });
        }

        const booking = await Booking.findByIdAndUpdate(id, { status }, { new: true });

        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }

        // Send email to the user if the status is completed
        if (status === 'completed') {
            sendCompletionEmail(booking.email, booking);
        }

        res.json({ message: 'Booking status updated', booking });
    } catch (error) {
        console.error('Error updating booking status:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Get booking by ID
const getBookingById = async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id);

        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }

        res.json(booking);
    } catch (error) {
        console.error('Error fetching booking:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Get all bookings
const getAllBookings = async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.json(bookings);
    } catch (error) {
        console.error('Error fetching bookings:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

module.exports = {
    createBooking,
    updateBookingStatus,
    getBookingById,
    getAllBookings,
};
