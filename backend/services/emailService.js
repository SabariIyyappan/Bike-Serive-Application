const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const sendStatusUpdateEmail = async (email, status) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: 'Booking Status Update',
      text: `Your booking status has been updated to: ${status}`,
    };

    const result = await transporter.sendMail(mailOptions);
    console.log('Email sent:', result.response);
    return result;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

module.exports = { sendStatusUpdateEmail };
