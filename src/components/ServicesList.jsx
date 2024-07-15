import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ServicesList.css'; 
import SlideShow from './Navbar/SlideShow';
import images from '../data/images';
import { Link } from 'react-router-dom';
import QuickBooking from './Navbar/QuickBooking';
import TrustedMechanics from './Navbar/TrustedMechanics';
import BrandsServices from './Navbar/Brandservices';
import ReviewDisplay from '../components/Navbar/ReviewDisplay';

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

  const handleTouch = (e) => {
    e.currentTarget.classList.add('rotate');
    setTimeout(() => {
      e.currentTarget.classList.remove('rotate');
    }, 500); // Duration of the rotate animation
  };

  return (
    <>
      <SlideShow>
        {images.map((image, index) => {
          return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
        })}
      </SlideShow>
      <span>&nbsp;</span>
      <span>&nbsp;</span>
      <div className="services-container">
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <h1 style={{ color: 'blue', fontSize: '2.5rem', fontWeight: 'bold' }}>Services</h1>
        </div>
        <ul className="services-list">
          {services.map((service) => (
            <li key={service._id} className="service-item" onClick={handleTouch}>
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
      <ReviewDisplay/>
      <QuickBooking/>
      <TrustedMechanics/>
      <BrandsServices/>
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
