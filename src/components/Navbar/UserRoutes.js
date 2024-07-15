import React, { useState } from 'react';
import BookingForm from '../User/BookingForm';
import UserBookingsList from '../User/UserBookingList';
import UserProfile from '../User/UserProfile';
import UserReviews from '../User/UserReviews';

const UserRoutes = () => {
  const [selectedComponent, setSelectedComponent] = useState('BookingForm');

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'BookingForm':
        return <BookingForm />;
      case 'UserBookingsList':
        return <UserBookingsList />;
      case 'UserProfile':
        return <UserProfile />;
      case 'UserReviews':
        return <UserReviews />;
      default:
        return <BookingForm />;
    }
  };

  const routeStyles = `
    .route-container {
      display: flex;
      padding: 20px;
    }

    .sidebar {
      width: 250px;
      background-color: #f0f0f0;
      padding: 20px 10px;
      border-right: 1px solid #ccc;
    }

    .sidebar h2 {
      font-size: 1.5rem;
      font-weight: bold;
      margin-bottom: 20px;
      color: #333;
    }

    .nav-links {
      list-style-type: none;
      padding: 0;
      margin-bottom: 20px;
    }

    .nav-links li {
      margin-bottom: 10px;
    }

    .nav-link {
      display: block;
      padding: 10px 16px;
      color: #333;
      text-decoration: none;
      border-radius: 4px;
      transition: background-color 0.3s ease;
      cursor: pointer;
    }

    .active-link {
      background-color: #007bff;
      color: #fff;
    }

    .nav-link:hover {
      color: #007bff;
    }

    .content {
      flex: 1;
      padding: 20px;
      background-color: #fff;
      border: 1px solid #ccc;
      border-radius: 8px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }

    /* Responsive design */
    @media (max-width: 768px) {
      .route-container {
        flex-direction: column;
      }

      .sidebar {
        width: 100%;
        border-right: none;
        border-bottom: 1px solid #ccc;
        padding-bottom: 20px;
      }

      .nav-links li {
        margin-bottom: 8px;
      }

      .content {
        border-radius: 0;
        border-left: none;
        border-top: 1px solid #ccc;
        margin-top: 20px;
        padding-top: 20px;
      }
    }
  `;

  return (
    <>
      <style>{routeStyles}</style>
      <div className="route-container">
        <div className="sidebar">
          <h2>User Dashboard</h2>
          <ul className="nav-links">
            <li>
              <div
                className={`nav-link ${selectedComponent === 'BookingForm' ? 'active-link' : ''}`}
                onClick={() => setSelectedComponent('BookingForm')}
              >
                Book a Service
              </div>
            </li>
            <li>
            </li>
            <li>
              <div
                className={`nav-link ${selectedComponent === 'UserProfile' ? 'active-link' : ''}`}
                onClick={() => setSelectedComponent('UserProfile')}
              >
                My Profile
              </div>
            </li>
            <li>
              <div
                className={`nav-link ${selectedComponent === 'UserReviews' ? 'active-link' : ''}`}
                onClick={() => setSelectedComponent('UserReviews')}
              >
                My Reviews
              </div>
            </li>
          </ul>
        </div>
        <div className="content">
          {renderComponent()}
        </div>
      </div>
    </>
  );
};

export default UserRoutes;
