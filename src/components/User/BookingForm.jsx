import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookingForm = () => {
  const [services, setServices] = useState([]);
  const [serviceName, setServiceName] = useState('');
  const [date, setDate] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/services');
        setServices(response.data);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    fetchServices();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/bookings', { serviceName, date, email, phone });
      setMessage('Booking created successfully');
      setServiceName('');
      setDate('');
      setEmail('');
      setPhone('');
    } catch (error) {
      console.error('Error creating booking:', error);
      setMessage('Error creating booking. Please try again.');
    }
  };

  const styles = {
    formContainer: {
      maxWidth: '400px',
      margin: '0 auto',
      padding: '2rem',
      backgroundColor: '#f8f9fa',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
    },
    formHeading: {
      marginBottom: '1.5rem',
      color: '#007bff',
      fontSize: '2rem',
      textTransform: 'uppercase',
      fontWeight: 'bold',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    formLabel: {
      marginBottom: '0.5rem',
      color: '#333',
      width: '100%',
      textAlign: 'left',
      fontWeight: 'bold',
    },
    formInput: {
      padding: '0.75rem',
      marginBottom: '1rem',
      border: '1px solid #ced4da',
      borderRadius: '4px',
      fontSize: '1rem',
      width: '100%',
      boxSizing: 'border-box',
      outline: 'none',
    },
    formButton: {
      padding: '0.75rem',
      backgroundColor: '#007bff',
      color: '#ffffff',
      border: 'none',
      borderRadius: '4px',
      fontSize: '1rem',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
      width: '100%',
      marginTop: '1rem',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      outline: 'none',
    },
    formButtonHover: {
      backgroundColor: '#0056b3',
    },
    formMessage: {
      marginTop: '1rem',
      color: 'green',
      fontWeight: 'bold',
    },
  };

  return (
    <div style={styles.formContainer}>
      <h2 style={styles.formHeading}>Book a Service</h2>
      <form style={styles.form} onSubmit={handleSubmit}>
        <label style={styles.formLabel}>Service Name</label>
        <select
          value={serviceName}
          onChange={(e) => setServiceName(e.target.value)}
          style={styles.formInput}
          required
        >
          <option value="" disabled>Select a service</option>
          {services.map((service) => (
            <option key={service._id} value={service.name}>{service.name}</option>
          ))}
        </select>
        <label style={styles.formLabel}>Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          style={styles.formInput}
          required
        />
        <label style={styles.formLabel}>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.formInput}
          required
        />
        <label style={styles.formLabel}>Phone</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={styles.formInput}
          required
        />
        <button
          type="submit"
          style={styles.formButton}
          onMouseOver={(e) => e.target.style.backgroundColor = styles.formButtonHover.backgroundColor}
          onMouseOut={(e) => e.target.style.backgroundColor = styles.formButton.backgroundColor}
        >
          Book Now
        </button>
        {message && <p style={styles.formMessage}>{message}</p>}
      </form>
    </div>
  );
};

export default BookingForm;
