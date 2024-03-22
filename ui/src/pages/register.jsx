import React from 'react';
import { Link } from 'react-router-dom';
import volunteerIcon from './../assets/vol.jpeg'; // Adjust the path to where your image is stored
import serviceIcon from './../assets/service.png'; // Adjust the path to where your image is stored

const Register = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold mb-6">Register</h1>
      <div className="flex flex-wrap justify-center gap-5">
        <Link to="/register/volunteer" className="flex flex-col items-center">
          <img src={volunteerIcon} alt="Volunteer" className="w-45 h-45" /> {/* 100x100px image */}
          <span className="mt-2">Register as a Volunteer</span>
        </Link>
        <Link to="/register/service" className="flex flex-col items-center">
          <img src={serviceIcon} alt="Service" className="w-50 h-50" /> {/* 100x100px image */}
          <span className="mt-2">Register for a Service</span>
        </Link>
      </div>
    </div>
  );
}

export default Register;


