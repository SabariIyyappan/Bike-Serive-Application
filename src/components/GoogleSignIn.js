// GoogleSignIn.js
import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth, googleProvider } from './firebaseconfig';
import { FaGoogle } from 'react-icons/fa'; // Import Google icon from react-icons

const GoogleSignIn = () => {
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log('User Info:', user);

      // Example: Navigate to userRoutes after successful sign-in
      navigate('/userRoutes');
    } catch (error) {
      console.error('Error during Google Sign-In:', error);
    }
  };

  return (
    <>
      <span>&nbsp;&nbsp;</span>
      <button onClick={handleGoogleSignIn} style={styles.button}>
        <FaGoogle style={styles.icon} />
        <span style={styles.text}>Sign in with Google</span>
      </button>
    </>
  );
};

const styles = {
  button: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#db4437',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s ease',
    marginBottom: '1rem',
  },
  icon: {
    width: '24px',
    height: '24px',
    marginRight: '10px',
  },
  text: {
    flex: 1,
  },
};

export default GoogleSignIn;
