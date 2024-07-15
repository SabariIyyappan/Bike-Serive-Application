import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Heading = styled.h2`
  margin-bottom: 1.5rem;
  color: #333;
  font-size: 2.5rem;
  text-align: center;
  border-bottom: 2px solid #007bff;
  padding-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  @media (max-width: 768px) {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }
`;

const Th = styled.th`
  padding: 1rem;
  border-bottom: 2px solid #ddd;
  text-align: left;
  background-color: #007bff;
  color: white;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 0.5rem;
  }
`;

const Td = styled.td`
  padding: 1rem;
  border-bottom: 1px solid #ddd;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 0.5rem;
  }
`;

const StatusButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    padding: 0.3rem 0.6rem;
    font-size: 0.8rem;
  }
`;

const ActionContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.2rem;
  }
`;

const BookingList = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/bookings');
        setBookings(response.data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    fetchBookings();
  }, []);

  const handleStatusChange = async (bookingId, newStatus) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/bookings/${bookingId}/status`, { status: newStatus });
      const updatedBooking = response.data.booking;
      setBookings((prevBookings) => prevBookings.map((booking) => (booking._id === bookingId ? updatedBooking : booking)));
    } catch (error) {
      console.error('Error updating booking status:', error);
    }
  };

  return (
    <Container>
      <Heading>ALL BOOKINGS</Heading>
      <Table>
        <thead>
          <tr>
            <Th>Service Name</Th>
            <Th>Date</Th>
            <Th>Email</Th>
            <Th>Phone</Th>
            <Th>Status</Th>
            <Th>Actions</Th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking._id}>
              <Td>{booking.serviceName}</Td>
              <Td>{new Date(booking.date).toLocaleDateString()}</Td>
              <Td>{booking.email}</Td>
              <Td>{booking.phone}</Td>
              <Td>{booking.status}</Td>
              <Td>
                <ActionContainer>
                  <StatusButton onClick={() => handleStatusChange(booking._id, 'ongoing')}>
                    Mark as Ongoing
                  </StatusButton>
                  <StatusButton onClick={() => handleStatusChange(booking._id, 'completed')}>
                    Mark as Completed
                  </StatusButton>
                </ActionContainer>
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default BookingList;
