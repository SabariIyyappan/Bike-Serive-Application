const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendCompletionEmail = (email, booking) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Booking Completed',
    text: `Your booking for the service ${booking.serviceName} on ${new Date(booking.date).toLocaleDateString()} has been completed.`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
};

module.exports = { sendCompletionEmail };
