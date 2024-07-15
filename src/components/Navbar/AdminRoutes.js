import React, { useState } from 'react';
import ServiceForm from '../Admin/ServiceForm';
import BookingsList from '../Admin/BookingsList';
import AdminsList from '../Admin/AdminsList';
import AdminForm from '../Admin/AdminForm';
import './NavBar.css';

const AdminRoutes = () => {
  const [selectedComponent, setSelectedComponent] = useState('ServiceForm');

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'ServiceForm':
        return <ServiceForm />;
      case 'BookingsList':
        return <BookingsList />;
      case 'AdminsList':
        return <AdminsList />;
      case 'AdminForm':
        return <AdminForm />;
      default:
        return <ServiceForm />;
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

    .custom-nav-links {
      list-style-type: none;
      padding: 0;
      margin-top: 2px;
    }

    .custom-nav-links li {
      margin-top: 10px;
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
      padding: 10px;
      background-color: #fff;
      border: 1px solid #ccc;
      border-radius: 5px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }

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

      .custom-nav-links li {
        margin-bottom: 8px;
      }

      .content {
        border-radius: 0;
        border-left: none;
        border-top: 1px solid #ccc;
        margin-top: 10px;
        padding-top: 10px;
      }
    }
  `;

  return (
    <>
      <style>{routeStyles}</style>
      <div className="route-container">
        <div className="sidebar">
          <h2 className="route-header">Admin Dashboard</h2>
          <ul className="custom-nav-links">
            <li>
              <div
                className={`nav-link ${selectedComponent === 'ServiceForm' ? 'active-link' : ''}`}
                onClick={() => setSelectedComponent('ServiceForm')}
              >
                Service Form
              </div>
            </li>
            <li>
              <div
                className={`nav-link ${selectedComponent === 'BookingsList' ? 'active-link' : ''}`}
                onClick={() => setSelectedComponent('BookingsList')}
              >
                Bookings List
              </div>
            </li>
            <li>
              <div
                className={`nav-link ${selectedComponent === 'AdminsList' ? 'active-link' : ''}`}
                onClick={() => setSelectedComponent('AdminsList')}
              >
                Admins List
              </div>
            </li>
            <li>
              <div
                className={`nav-link ${selectedComponent === 'AdminForm' ? 'active-link' : ''}`}
                onClick={() => setSelectedComponent('AdminForm')}
              >
                Admin Form
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

export default AdminRoutes;
