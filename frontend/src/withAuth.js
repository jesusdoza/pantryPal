// withAuth.js
import React from 'react';
import { Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const loggedIn = Cookies.get('loggedIn');

    // Here, you can check for the validity of the 'loggedIn' token.
    // Replace 'isValidToken' with your own token validation function.
    const isValidToken = loggedIn && isValidToken(loggedIn);

    if (isValidToken) {
      return <WrappedComponent {...props} />;
    } else {
      return <Redirect to="/login" />;
    }
  };
};

export default withAuth;
