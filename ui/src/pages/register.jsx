import React from 'react';
import { Link } from 'react-router-dom';

const register = () => {
  return (
    <div className="register-page">
      <h1>Register</h1>
      <div className="register-options">
        <Link to="/register/volunteer" className="register-button">Register as a Volunteer</Link>
        <Link to="/register/service" className="register-button">Register for a Service</Link>
      </div>
    </div>
  );
}

export default register;
