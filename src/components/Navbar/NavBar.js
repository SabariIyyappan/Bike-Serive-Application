import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const storedUserEmail = localStorage.getItem('userEmail');
    if (storedUserEmail) {
      setUserEmail(storedUserEmail);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userEmail');
    setUserEmail('');
  };

  const navContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    flexWrap: 'wrap',
  };

  const logoContainerStyle = {
    textAlign: 'center',
    marginRight: 'auto',
    padding: '10px 20px',
    color: '#2e1d92',
  };

  const logoLinkStyle = {
    color: '#da3437',
    fontWeight: 'bold',
    textDecoration: 'none',
    fontSize: '1.4rem',
    textTransform: 'uppercase',
  };

  const navLinksStyle = {
    listStyleType: 'none',
    margin: '0',
    padding: '0',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
  };

  const navLinkItemStyle = {
    marginLeft: '20px',
    position: 'relative',
  };

  const navLinkStyle = {
    color: '#0f07ec',
    textDecoration: 'none',
    fontSize: '1.2rem',
    transition: 'color 0.3s ease',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  };

  const navLinkHoverStyle = {
    color: '#0056b3',
  };

  const logoutButtonStyle = {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: '#0f07ec',
    fontSize: '1.2rem',
    transition: 'color 0.3s ease',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  };

  const logoutButtonHoverStyle = {
    color: '#0056b3',
  };

  const navbarStyle = {
    backgroundColor: '#fcfbfb',
    color: '#090909',
    padding: '10px 0',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    borderBottom: '2px solid #e0e0e0',
    position: 'sticky',
    top: '0',
    zIndex: '1000',
  };

  return (
    <nav style={navbarStyle}>
      <div style={navContainerStyle} className="nav-container">
        <div style={logoContainerStyle} className="logo-container">
          <Link to="/" style={logoLinkStyle} className="nav-link logo">
            Bike Service Center
          </Link>
        </div>
        <div style={navLinksStyle} className="nav-links">
          <ul style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
            {userEmail ? (
              <>
                <li style={navLinkItemStyle}>
                  <FontAwesomeIcon icon={faUser} style={{ marginRight: '5px' }} />
                  <span style={navLinkStyle}>Logged in as: {userEmail}</span>
                </li>
                <li style={navLinkItemStyle}>
                  <button
                    onClick={handleLogout}
                    style={logoutButtonStyle}
                    onMouseOver={(e) => (e.target.style.color = logoutButtonHoverStyle.color)}
                    onMouseOut={(e) => (e.target.style.color = logoutButtonStyle.color)}
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li style={navLinkItemStyle}>
                <Link to="/login" style={navLinkStyle} className="nav-link">
                  Sign In
                </Link>
              </li>
            )}
            <li style={navLinkItemStyle}>
              <Link to="/service" style={navLinkStyle} className="nav-link">
                Service
              </Link>
            </li>
            <li style={navLinkItemStyle}>
              <Link to="/adminRoutes" style={navLinkStyle} className="nav-link">
                Admin Dashboard
              </Link>
            </li>
            <li style={navLinkItemStyle}>
              <Link to="/userRoutes" style={navLinkStyle} className="nav-link">
                User Dashboard
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
