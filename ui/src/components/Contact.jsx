

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import truckImage from '../assets/path-truck.png'; // Adjust the path to your image

const Contact = () => {
  return (
    <div className='w-full py-16 text-white bg-[#00df9a] px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-2'>
        <div className='my-4 pl-8'>
          <h1 className='text-4xl font-bold py-2 md:text-black 5xl'>
            CONTACT US
          </h1>
          <div className='my-4'>
            <p className="text-xl mb-6"><FontAwesomeIcon icon={faEnvelope} className="mr-2 text-black" /><span className="font-bold text-black pr-3">Email:</span>example@example.com</p>
            <p className="text-xl mb-6"><FontAwesomeIcon icon={faPhone} className="mr-2 text-black" /><span className="font-bold text-black pr-2">Phone:</span> 123-456-7890</p>
            <p className="text-xl mb-6"><FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-black" /><span className="font-bold text-black pr-2">Address:</span> 123 Street, City, Country</p>
            
          </div>
      
        </div>
       
        <div className='hidden lg:block'>
          <img src={truckImage} alt="Delivery Truck" className='w-full h-auto' />
        </div>
        
        <p className='text-black font-bold text-3xl p-2 font-lilita-one'>
        Complex Deliveries Made Simple
        </p>
        
      </div>
    </div>
  );
};

export default Contact;
