// src/components/Admin/BookingDetails.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function BookingDetails() {
  const { id } = useParams();
  const [booking, setBooking] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBooking = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/bookings/${id}`);
        setBooking(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching booking:', error);
        setError('Error fetching booking. Please try again.');
        setLoading(false);
      }
    };

    fetchBooking();
  }, [id]);

  const handleStatusChange = async (status) => {
    try {
      await axios.put(`http://localhost:5000/api/bookings/${id}/status`, { status });
      setBooking({ ...booking, status });
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!booking) return <div>No booking found.</div>;

  const styles = {
    container: {
      maxWidth: '600px',
      margin: '2rem auto',
      padding: '2rem',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
    },
    heading: {
      marginBottom: '1.5rem',
      color: '#007bff',
      fontSize: '2rem',
    },
    detail: {
      fontSize: '1.2rem',
      marginBottom: '1rem',
    },
    button: {
      padding: '0.75rem 1.5rem',
      margin: '0.5rem',
      border: 'none',
      borderRadius: '4px',
      fontSize: '1rem',
      cursor: 'pointer',
      color: 'white',
      backgroundColor: '#007bff',
      transition: 'background-color 0.3s ease',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Booking Details</h1>
      <p style={styles.detail}><strong>Service:</strong> {booking.serviceName}</p>
      <p style={styles.detail}><strong>Date:</strong> {new Date(booking.date).toLocaleDateString()}</p>
      <p style={styles.detail}><strong>Email:</strong> {booking.email}</p>
      <p style={styles.detail}><strong>Status:</strong> {booking.status}</p>
      <button
        style={styles.button}
        onClick={() => handleStatusChange('ready for delivery')}
      >
        Ready for Delivery
      </button>
      <button
        style={styles.button}
        onClick={() => handleStatusChange('completed')}
      >
        Completed
      </button>
    </div>
  );
}

export default BookingDetails;
