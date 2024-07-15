
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useUser } from '../context/UserContext'; 

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useUser(); 

  return (
    <Route
      {...rest}
      render={(props) =>
        user ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
