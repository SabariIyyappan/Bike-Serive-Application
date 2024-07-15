// controllers/reviewController.js

const Review = require('../models/Review');
const Service = require('../models/Service'); // Assuming you have a Service model

// Create a new review
const createReview = async (req, res) => {
  const { serviceId, rating, reviewText } = req.body;

  try {
    // Check if user is authenticated and retrieve user ID
    const userId = req.user ? req.user._id : null;

    // Validate that serviceId exists and is valid
    const existingService = await Service.findById(serviceId);
    if (!existingService) {
      return res.status(404).json({ error: 'Service not found' });
    }

    // Create a new review
    const newReview = new Review({
      userId,
      serviceId,
      rating,
      review: reviewText
    });

    await newReview.save();
    res.status(201).json(newReview);
  } catch (error) {
    console.error('Error adding review:', error);
    res.status(500).json({ error: 'Error adding review. Please try again.' });
  }
};

// Get all reviews
const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    res.status(200).json(reviews);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    res.status(500).json({ error: 'Error fetching reviews. Please try again.' });
  }
};

// Get reviews by user ID
const getReviewsByUserId = async (req, res) => {
  const userId = req.params.userId;

  try {
    const reviews = await Review.find({ userId }).populate('serviceId', 'name'); // Populate serviceId with service name
    res.json(reviews);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    res.status(500).json({ error: 'Error fetching reviews' });
  }
};

module.exports = {
  createReview,
  getAllReviews,
  getReviewsByUserId
};
