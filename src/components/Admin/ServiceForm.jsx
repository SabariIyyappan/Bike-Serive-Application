import React, { useState } from 'react';
import axios from 'axios';

const ServiceForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/services', { name, description, price });
      alert('Service created successfully');
      setName('');
      setDescription('');
      setPrice('');
    } catch (error) {
      console.error('Error creating service:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'description') {
      setDescription(value);
    } else if (name === 'price') {
      setPrice(value);
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
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    formLabel: {
      marginBottom: '0.5rem',
      color: '#495057',
      width: '100%',
      textAlign: 'left',
      fontSize: '1rem',
    },
    formInput: {
      padding: '0.75rem',
      marginBottom: '1rem',
      border: '1px solid #ced4da',
      borderRadius: '4px',
      fontSize: '1rem',
      width: '100%',
      boxSizing: 'border-box',
    },
    formButton: {
      padding: '0.75rem',
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      fontSize: '1rem',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
      width: '100%',
      marginTop: '1rem',
    },
  };

  // Responsive design adjustment
  const mediaQuery = `@media (max-width: 768px) {
    formContainer {
      width: 90%;
      padding: 1.5rem;
    }
  }`;

  return (
    <>
      <div style={{ ...styles.formContainer }}>
        <style>{mediaQuery}</style>
        <h2 style={styles.formHeading}>Create Service</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <label style={styles.formLabel}>
            Name:
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              placeholder="Enter name"
              style={styles.formInput}
              required
            />
          </label>
          <label style={styles.formLabel}>
            Description:
            <input
              type="text"
              name="description"
              value={description}
              onChange={handleChange}
              placeholder="Enter description"
              style={styles.formInput}
              required
            />
          </label>
          <label style={styles.formLabel}>
            Price:
            <input
              type="number"
              name="price"
              value={price}
              onChange={handleChange}
              placeholder="Enter price"
              style={styles.formInput}
              required
            />
          </label>
          <button type="submit" style={styles.formButton}>Create Service</button>
        </form>
      </div>
    </>
  );
};

export default ServiceForm;
