import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function ServicesList() {
  const [services, setServices] = useState([]);

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

  return (
    <>
<div className="services-container">
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h1 style={{ color: 'blue', fontSize: '2.5rem', fontWeight: 'bold' }}>Services</h1>
      </div>
      <ul className="services-list">
      {services.map((service) => (
        <li key={service._id} className="service-item">
          <div className="service-details">
            <span style={{ color: 'red', fontWeight: 'bold' }} className="service-name">{service.name} </span> - 
            <span className="service-description">{service.description}</span> - 
            <span style={{ color: '#007bff', fontWeight: 'bold' }} className="service-price">₹{service.price}</span>
          </div>
          <div className="service-actions">
            <Link to="/user/book">
              <button style={buttonStyles}>Book Now</button>
            </Link>
          </div>
        </li>
      ))}
    </ul>
    </div>
    </>
  );
}
const buttonStyles = {
    marginLeft: '10px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    padding: '8px 16px',
    cursor: 'pointer',
  };

export default ServicesList;
