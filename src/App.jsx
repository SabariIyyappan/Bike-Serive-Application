// App.js or index.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProvider } from './context/UserContext'; 
import NavBar from './components/Navbar/NavBar'; 
import Login from './components/Login'; 
import Register from './components/Register'; 
import AdminForm from './components/Admin/AdminForm'; 
import AdminsList from './components/Admin/AdminsList'; 
import BookingDetails from './components/Admin/BookingDetails'; 
import BookingsList from './components/Admin/BookingsList'; 
import ServiceForm from './components/Admin/ServiceForm'; 
import BookingForm from './components/User/BookingForm'; 
import UserBookingsList from './components/User/UserBookingList'; 
import UserProfile from './components/User/UserProfile'; 
import UserReviews from './components/User/UserReviews'; 
import ServicesList from './components/ServicesList'; 
import ProtectedComponent from './components/ProtectedComponent'; 
import Service from './components/Navbar/Service';
import AdminRoutes from './components/Navbar/AdminRoutes';
import UserRoutes from './components/Navbar/UserRoutes';
import QuickBooking from './components/Navbar/QuickBooking';
import TrustedMechanics from './components/Navbar/TrustedMechanics';
import BrandsServices from './components/Navbar/Brandservices';
import Footer from './components/Navbar/Footer';
import ReviewDisplay from '../src/components/Navbar/ReviewDisplay';

const App = () => {
  return (
    <UserProvider>
      <Router>
        <div className="app-container">
          <NavBar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/admin/services" element={<ServiceForm />} />
            <Route path="/admin/bookings" element={<BookingsList />} />
            <Route path="/admin/booking/:id" element={<BookingDetails />} />
            <Route path="/admin/admins" element={<AdminsList />} />
            <Route path="/admin/admin" element={<AdminForm />} />
            <Route path="/user/book" element={<BookingForm />} />
            <Route path="/user/bookings" element={<UserBookingsList />} />
            <Route path="/user/profile" element={<UserProfile />} />
            <Route path="/user/reviews" element={<UserReviews />} />
            <Route path="/protected" element={<ProtectedComponent />} />
            <Route path="/" element={<ServicesList />} />
            <Route path="/service" element={<Service />} />
            <Route path="/adminRoutes" element={<AdminRoutes />} />
            <Route path="/userRoutes" element={<UserRoutes />} />
            <Route path="/quickbooking" element={<QuickBooking />} />
            <Route path="/trustedmechanics" element={<TrustedMechanics />} />
            <Route path="/brandservices" element={<BrandsServices />} />
          </Routes>
          
          <Footer />
        </div>
      </Router>
    </UserProvider>
  );
};

export default App;
