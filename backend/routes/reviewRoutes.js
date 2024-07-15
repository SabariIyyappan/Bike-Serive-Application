// routes/reviewRoutes.js

const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');

// POST /api/reviews
router.post('/', reviewController.createReview);

// GET /api/reviews
router.get('/', reviewController.getAllReviews);

// GET /api/reviews/user/:userId
router.get('/user/:userId', reviewController.getReviewsByUserId);

module.exports = router;
