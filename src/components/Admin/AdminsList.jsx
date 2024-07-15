import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminsList = () => {
  const [admins, setAdmins] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/admins');
        setAdmins(response.data);
      } catch (error) {
        console.error('Error fetching admins:', error);
        setError('Error fetching admins. Please try again.');
      }
    };

    fetchAdmins();
  }, []);

  const updateStatus = async (id, newStatus) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/admins/${id}/status`, { status: newStatus });
      setAdmins(admins.map(admin => admin._id === id ? { ...admin, status: newStatus } : admin));
    } catch (error) {
      console.error('Error updating admin status:', error);
    }
  };

  if (error) {
    return <div style={containerStyles}>{error}</div>;
  }

  return (
    <div style={outerContainerStyles}>
      <div style={containerStyles}>
        <h1 style={headingStyles}>Admins List</h1>
        <ul style={listStyles}>
          {admins.map((admin) => (
            <li key={admin._id} style={itemStyles}>
              <div style={adminStyles}>
                <div style={nameStyles}>{admin.name}</div>
                <div style={emailStyles}>{admin.email}</div>
                <div>
                  <button
                    style={admin.status === 'active' ? { ...statusButtonStyles, backgroundColor: '#28a745' } : statusButtonStyles}
                    onClick={() => updateStatus(admin._id, admin.status === 'active' ? 'inactive' : 'active')}>
                    {admin.status === 'active' ? 'Active' : 'Inactive'}
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const outerContainerStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
};

const containerStyles = {
  width: '100%', // Full width on smaller screens
  maxWidth: '800px', // Maximum width for larger screens
  padding: '2rem',
  backgroundColor: '#f8f9fa',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
};

const headingStyles = {
  marginBottom: '1.5rem',
  color: '#007bff',
  fontSize: '2rem',
  textTransform: 'uppercase',
  fontWeight: 'bold',
};

const listStyles = {
  listStyleType: 'none',
  padding: 0,
};

const itemStyles = {
  marginBottom: '1.5rem',
  padding: '1rem',
  border: '1px solid #ced4da',
  borderRadius: '8px',
  transition: 'transform 0.3s ease-in-out',
  cursor: 'pointer',
  backgroundColor: '#ffffff',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const adminStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const nameStyles = {
  fontWeight: 'bold',
  fontSize: '1.2rem',
  color: '#333',
  marginBottom: '0.5rem',
};

const emailStyles = {
  fontSize: '1rem',
  color: '#666',
  marginBottom: '0.5rem',
};

const statusButtonStyles = {
  marginTop: '0.5rem',
  padding: '0.5rem 1rem',
  backgroundColor: '#007bff',
  color: '#ffffff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '0.9rem',
  transition: 'background-color 0.3s ease',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  outline: 'none',
  '&:hover': {
    backgroundColor: '#0056b3',
  },
};

export default AdminsList;
