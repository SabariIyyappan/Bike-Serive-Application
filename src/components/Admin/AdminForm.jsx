import React, { useState } from 'react';
import axios from 'axios';

const AdminForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/admins', { name, email, password });
      alert('Admin created successfully');
      setName('');
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error('Error creating admin:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
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
  };

  return (
    <div style={styles.formContainer}>
      <h2 style={styles.formHeading}>Create Admin</h2>
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
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Enter email"
            style={styles.formInput}
            required
          />
        </label>
        <label style={styles.formLabel}>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="Enter password"
            style={styles.formInput}
            required
          />
        </label>
        <button type="submit" style={styles.formButton}>Create Admin</button>
      </form>
    </div>
  );
};

export default AdminForm;
