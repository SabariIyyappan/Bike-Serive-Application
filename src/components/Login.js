// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import { useNavigate, Link } from 'react-router-dom';
// // import { useUser } from '../context/UserContext';
// // import GoogleSignIn from './GoogleSignIn';

// // const Login = () => {
// //   const { setUser } = useUser();
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [error, setError] = useState(null);
// //   const navigate = useNavigate();

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     try {
// //       const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });

// //       if (response.status === 200) {
// //         setUser(response.data.user);
// //         localStorage.setItem('token', response.data.token);
// //         alert('Login successful!');
        
// //         const isAdmin = await checkAdmin(email);
// //         if (isAdmin) {
// //           navigate('/adminRoutes');
// //         } else {
// //           navigate('/userRoutes'); // Navigate to user profile page after login
// //         }
// //       } else {
// //         alert('Login failed. Please try again later.');
// //       }
// //     } catch (error) {
// //       console.error('Error logging in:', error);
// //       setError(error.response ? error.response.data.message : 'Error logging in. Please try again later.');
// //     }
// //   };

// //   const checkAdmin = async (email) => {
// //     try {
// //       const response = await axios.get('http://localhost:5000/api/admins');
// //       const adminList = response.data;
// //       return adminList.some(admin => admin.email === email);
// //     } catch (error) {
// //       console.error('Error checking admin status:', error);
// //       return false;
// //     }
// //   };

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     if (name === 'email') {
// //       setEmail(value);
// //     } else if (name === 'password') {
// //       setPassword(value);
// //     }
// //   };

// //   return (
// //     <>
// //       <div style={styles.container}>
// //         <h2 style={styles.heading}>Login</h2>
// //         {error && <p style={{ color: 'red' }}>{error}</p>}
// //         <form style={styles.form} onSubmit={handleSubmit}>
// //           <label style={styles.label}>
// //             Email:
// //             <input
// //               type="email"
// //               name="email"
// //               value={email}
// //               onChange={handleChange}
// //               required
// //               style={styles.input}
// //             />
// //           </label>
// //           <label style={styles.label}>
// //             Password:
// //             <input
// //               type="password"
// //               name="password"
// //               value={password}
// //               onChange={handleChange}
// //               required
// //               style={styles.input}
// //             />
// //           </label>
// //           <button type="submit" style={styles.button}>
// //             Login
// //           </button>
// //         </form>
// //         <GoogleSignIn />
// //         <p style={{ marginTop: '1rem' }}>
// //           Don't have an account? <Link to="/register">Register here</Link>
// //         </p>
// //       </div>
// //     </>
// //   );
// // };

// // const styles = {
// //   container: {
// //     maxWidth: '400px',
// //     margin: '0 auto',
// //     padding: '2rem',
// //     backgroundColor: '#FFE5B4',
// //     borderRadius: '8px',
// //     boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
// //     textAlign: 'center',
// //   },
// //   heading: {
// //     marginBottom: '1.5rem',
// //     color: 'blue',
// //     fontSize: '2rem',
// //   },
// //   form: {
// //     display: 'flex',
// //     flexDirection: 'column',
// //     alignItems: 'center',
// //   },
// //   label: {
// //     marginBottom: '0.5rem',
// //     color: 'black',
// //     width: '100%',
// //   },
// //   input: {
// //     padding: '0.75rem',
// //     marginBottom: '1rem',
// //     border: '1px solid #ddd',
// //     borderRadius: '4px',
// //     fontSize: '1rem',
// //     outline: 'none',
// //     width: '100%',
// //   },
// //   button: {
// //     padding: '0.75rem',
// //     backgroundColor: '#007bff',
// //     color: 'white',
// //     border: 'none',
// //     borderRadius: '4px',
// //     fontSize: '1rem',
// //     cursor: 'pointer',
// //     transition: 'background-color 0.3s ease',
// //     width: '100%',
// //   },
// // };

// // export default Login;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate, Link } from 'react-router-dom';
// import { useUser } from '../context/UserContext';
// import GoogleSignIn from './GoogleSignIn';

// const Login = () => {
//   const { setUser } = useUser();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   // Check localStorage on component mount
//   useEffect(() => {
//     const storedEmail = localStorage.getItem('userEmail');
//     if (storedEmail) {
//       setEmail(storedEmail);
//     }
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });

//       if (response.status === 200) {
//         setUser(response.data.user);

//         // Store user details in localStorage
//         localStorage.setItem('userEmail', response.data.user.email);

//         // Redirect logic based on admin status
//         const isAdmin = await checkAdmin(email);
//         if (isAdmin) {
//           navigate('/adminRoutes');
//         } else {
//           navigate('/userRoutes');
//         }
//       } else {
//         alert('Login failed. Please try again later.');
//       }
//     } catch (error) {
//       console.error('Error logging in:', error);
//       setError(error.response ? error.response.data.message : 'Error logging in. Please try again later.');
//     }
//   };

//   const checkAdmin = async (email) => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/admins');
//       const adminList = response.data;
//       return adminList.some(admin => admin.email === email);
//     } catch (error) {
//       console.error('Error checking admin status:', error);
//       return false;
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === 'email') {
//       setEmail(value);
//     } else if (name === 'password') {
//       setPassword(value);
//     }
//   };

//   const handleLogout = () => {
//     // Clear user details from localStorage and reset state
//     localStorage.removeItem('userEmail');
//     setEmail('');
//     setPassword('');
//     setUser(null); // Assuming setUser clears user state in context
//   };

//   return (
//     <>
//       <div style={styles.container}>
//         <h2 style={styles.heading}>Login</h2>
//         {error && <p style={{ color: 'red' }}>{error}</p>}
//         <form style={styles.form} onSubmit={handleSubmit}>
//           <label style={styles.label}>
//             Email:
//             <input
//               type="email"
//               name="email"
//               value={email}
//               onChange={handleChange}
//               required
//               style={styles.input}
//             />
//           </label>
//           <label style={styles.label}>
//             Password:
//             <input
//               type="password"
//               name="password"
//               value={password}
//               onChange={handleChange}
//               required
//               style={styles.input}
//             />
//           </label>
//           <button type="submit" style={styles.button}>
//             Login
//           </button>
//         </form>
//         <GoogleSignIn />
//         <p style={{ marginTop: '1rem' }}>
//           Don't have an account? <Link to="/register">Register here</Link>
//         </p>
//         <button onClick={handleLogout}>Logout</button>
//       </div>
//     </>
//   );
// };

// const styles = {
//   container: {
//     maxWidth: '400px',
//     margin: '0 auto',
//     padding: '2rem',
//     backgroundColor: '#FFE5B4',
//     borderRadius: '8px',
//     boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
//     textAlign: 'center',
//   },
//   heading: {
//     marginBottom: '1.5rem',
//     color: 'blue',
//     fontSize: '2rem',
//   },
//   form: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   label: {
//     marginBottom: '0.5rem',
//     color: 'black',
//     width: '100%',
//   },
//   input: {
//     padding: '0.75rem',
//     marginBottom: '1rem',
//     border: '1px solid #ddd',
//     borderRadius: '4px',
//     fontSize: '1rem',
//     outline: 'none',
//     width: '100%',
//   },
//   button: {
//     padding: '0.75rem',
//     backgroundColor: '#007bff',
//     color: 'white',
//     border: 'none',
//     borderRadius: '4px',
//     fontSize: '1rem',
//     cursor: 'pointer',
//     transition: 'background-color 0.3s ease',
//     width: '100%',
//   },
// };

// export default Login;
// components/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import GoogleSignIn from './GoogleSignIn';

const Login = () => {
  const { setUser } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });

      if (response.status === 200) {
        setUser(response.data.user);
        
        // Store user details in localStorage
        localStorage.setItem('userEmail', response.data.user.email);
        localStorage.setItem('token', response.data.token);

        // Redirect logic based on admin status
        const isAdmin = await checkAdmin(email);
        if (isAdmin) {
          navigate('/adminRoutes');
        } else {
          navigate('/userRoutes');
        }
      } else {
        alert('Login failed. Please try again later.');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setError(error.response ? error.response.data.message : 'Error logging in. Please try again later.');
    }
  };

  const checkAdmin = async (email) => {
    try {
      const response = await axios.get('http://localhost:5000/api/admins');
      const adminList = response.data;
      return adminList.some(admin => admin.email === email);
    } catch (error) {
      console.error('Error checking admin status:', error);
      return false;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  return (
    <>
      <div style={styles.container}>
        <h2 style={styles.heading}>LOGIN</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form style={styles.form} onSubmit={handleSubmit}>
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
            Login
          </button>
        </form>
        <GoogleSignIn />
        <p style={{ marginTop: '1rem' }}>
          Don't have an account? <Link to="/register">Register here</Link>
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
    fontWeight:'bold',
  },
  heading: {
    marginBottom: '1.5rem',
    color: 'blue',
    fontSize: '2rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  label: {
    marginBottom: '0.5rem',
    color: 'black',
    width: '100%',
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
};

export default Login;
