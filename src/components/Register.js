import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import GoogleSignIn from './GoogleSignIn';

const Register = () => {
  const { setUser } = useUser();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
      setNameError(false);
    } else if (name === 'email') {
      setEmail(value);
      setEmailError(false);
    } else if (name === 'password') {
      setPassword(value);
      setPasswordError(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', { name, email, password });

      if (response.status === 201 || response.status === 200) {
        alert('Registration successful');
        navigate('/login'); // Redirect to login page after successful registration
      } else {
        console.error('Unexpected status code:', response.status);
        alert('Registration failed. Please try again later.');
      }

    } catch (error) {
      console.error('Error registering user:', error);
      alert('Error registering user. Please try again later.');
    }
  };

  return (
    <>
    <span>&nbsp;&nbsp;</span>
    <div style={styles.container}>
      <h2 style={styles.heading}>REGISTER</h2>
      <form style={styles.form} onSubmit={handleSubmit}>
        <label style={styles.label}>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </label>
        <button type="submit" style={styles.button}>
          Register
        </button>
      </form>
      <span>&nbsp;</span>

      <GoogleSignIn />
      <p style={styles.register}>
        Already have an account? <Link to="/login" style={styles.registerLink}>Login here</Link>
      </p>
    </div>
    </>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '2rem',
    backgroundColor: '#f0f0f0',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  heading: {
    marginBottom: '1.5rem',
    color: '#007bff',
    fontSize: '2rem',
    fontWeight: 'bold',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  label: {
    marginBottom: '0.5rem',
    color: '#333',
    width: '100%',
    fontWeight: 'bold',
  },
  input: {
    padding: '0.75rem',
    marginBottom: '1rem',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '1rem',
    outline: 'none',
    width: '100%',
  },
  button: {
    padding: '0.75rem',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    width: '100%',
  },
  register: {
    marginTop: '1rem',
    fontSize: '0.9rem',
    color: '#555',
  },
  registerLink: {
    color: '#007bff',
    textDecoration: 'none',
    marginLeft: '0.5rem',
    fontWeight: 'bold',
  },
};

export default Register;
