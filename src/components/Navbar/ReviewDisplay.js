import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ReviewsList() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/reviews');
        console.log('Fetched reviews:', response.data); // Log fetched data
        setReviews(response.data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, []);

  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '2rem',
      fontFamily: 'Arial, sans-serif',
      borderRadius: '8px',
    },
    heading: {
      fontSize: '2.5rem',
      color: 'Blue',
      textAlign: 'center',
      marginBottom: '2rem',
      textTransform: 'uppercase',
      fontWeight:'bold',

    },
    reviewsList: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '1.5rem',
      listStyleType: 'none',
      padding: 0,
    },
    reviewItem: {
      padding: '1.5rem',
      border: '1px solid #ddd',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9',
      transition: 'background-color 0.3s ease',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    reviewItemHover: {
      backgroundColor: '#f1f1f1',
    },
    rating: {
      fontWeight: 'bold',
      color: '#007bff',
      fontSize: '1.2rem',
      marginBottom: '0.5rem',
    },
    reviewText: {
      fontSize: '1rem',
      color: '#333',
      lineHeight: '1.4',
    },
    noReviews: {
      textAlign: 'center',
      color: '#999',
      marginTop: '2rem',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Customer Reviews</h1>
      <ul style={styles.reviewsList}>
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <li
              key={review._id}
              style={styles.reviewItem}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = styles.reviewItemHover.backgroundColor)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = styles.reviewItem.backgroundColor)}
            >
              <p style={styles.rating}>Rating: {review.rating}</p>
              <p style={styles.reviewText}>"{review.review}"</p>
            </li>
          ))
        ) : (
          <li style={styles.reviewItem}>
            <p style={styles.noReviews}>No reviews found.</p>
          </li>
        )}
      </ul>
    </div>
  );
}

export default ReviewsList;
