// UserReviews.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const UserReviewsContainer = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  h2 {
    font-size: 1.8rem;
    color: #333;
    margin-bottom: 1.5rem;
    text-align: center;
    border-bottom: 2px solid #ddd;
    padding-bottom: 1rem;
  }

  .review-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .form-label {
      display: flex;
      flex-direction: column;
      font-size: 1rem;
      color: #333;
      margin-bottom: 0.5rem;
    }

    .form-input {
      padding: 0.75rem;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 1rem;
      width: 100%;
      transition: border-color 0.3s ease;

      &:focus {
        border-color: #007bff;
      }
    }

    .submit-button {
      padding: 0.75rem;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      font-size: 1rem;
      cursor: pointer;
      transition: background-color 0.3s ease, transform 0.3s ease;

      &:hover {
        background-color: #0056b3;
        transform: translateY(-2px);
      }

      &:active {
        transform: translateY(0);
      }
    }
  }

  .message {
    margin-top: 1rem;
    font-size: 1rem;
    color: green;
    text-align: center;
    animation: fadeIn 0.5s ease;
  }

  .reviews-list {
    list-style: none;
    padding: 0;
    margin-top: 2rem;

    .review-item {
      background-color: white;
      padding: 1rem;
      margin-bottom: 1rem;
      border-radius: 4px;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.02);
      }

      p {
        margin: 0.5rem 0;
        color: #555;
      }
    }
  }

  @media (max-width: 600px) {
    padding: 1rem;

    h2 {
      font-size: 1.5rem;
    }

    .review-form {
      gap: 0.5rem;

      .form-label {
        font-size: 0.9rem;
      }

      .form-input {
        padding: 0.5rem;
        font-size: 0.9rem;
      }

      .submit-button {
        padding: 0.5rem;
        font-size: 0.9rem;
      }
    }

    .message {
      font-size: 0.9rem;
    }

    .reviews-list {
      .review-item {
        padding: 0.75rem;
        font-size: 0.9rem;
      }
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

function UserReviews() {
  const [reviews, setReviews] = useState([]);
  const [serviceName, setServiceName] = useState('');
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [message, setMessage] = useState('');
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetchReviews();
    fetchServices();
  }, []);

  const fetchReviews = async () => {
    try {
      const userId = 'currentUserId'; // Replace with actual user ID
      const response = await axios.get(`/api/reviews/user/${userId}`);
      setReviews(response.data);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };

  const fetchServices = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/services'); // Adjust URL as per your backend setup
      setServices(response.data);
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  };

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    try {
      const selectedService = services.find(service => service.name === serviceName);
      const serviceId = selectedService._id; // Assuming _id is the MongoDB ObjectId of the service

      const response = await axios.post('http://localhost:5000/api/reviews', {
        serviceId,
        rating,
        reviewText
      });

      setMessage('Review added successfully');
      setServiceName('');
      setRating(0);
      setReviewText('');
      fetchReviews(); // Fetch reviews again to update the list
    } catch (error) {
      console.error('Error adding review:', error);
      setMessage('Error adding review. Please try again.');
    }
  };

  const handleRatingChange = (value) => {
    setRating(value);
  };

  return (
    <UserReviewsContainer>
      <h2>Add a Review</h2>
      <form onSubmit={handleSubmitReview} className="review-form">
        <label className="form-label">
          Service:
          <select
            value={serviceName}
            onChange={(e) => setServiceName(e.target.value)}
            className="form-input"
            required
          >
            <option value="">Select Service</option>
            {services.map((service) => (
              <option key={service._id} value={service.name}>{service.name}</option>
            ))}
          </select>
        </label>
        <label className="form-label">
          Rating:
          <select
            value={rating}
            onChange={(e) => handleRatingChange(parseInt(e.target.value))}
            className="form-input"
            required
          >
            <option value="0">Select Rating</option>
            <option value="1">1 - Poor</option>
            <option value="2">2 - Fair</option>
            <option value="3">3 - Good</option>
            <option value="4">4 - Very Good</option>
            <option value="5">5 - Excellent</option>
          </select>
        </label>
        <label className="form-label">
          Review:
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            className="form-input"
            required
          />
        </label>
        <button type="submit" className="submit-button">Submit Review</button>
      </form>
      {message && <p className="message">{message}</p>}
      <ul className="reviews-list">
        {reviews.map((review) => (
          <li key={review._id} className="review-item">
            <p>Service: {review.serviceName}</p>
            <p>Rating: {review.rating}</p>
            <p>Review: {review.reviewText}</p>
          </li>
        ))}
      </ul>
    </UserReviewsContainer>
  );
}

export default UserReviews;
