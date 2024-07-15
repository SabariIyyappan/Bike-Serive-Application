// src/components/ProtectedComponent.jsx
import React from 'react';
import { useUser } from '../context/UserContext';

const ProtectedComponent = () => {
  const { user } = useUser();

  if (!user) {
    return (
      <div>
        <h2>Access Denied</h2>
        <p>You need to log in to access this page.</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Protected Content</h2>
      <p>Welcome, {user.email}!</p>
      <p>This content is only visible to authenticated users.</p>
    </div>
  );
};

export default ProtectedComponent;
