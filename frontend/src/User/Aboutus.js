// AboutUs.js
import React from 'react';
import Unavbar from './Unavbar';
import './Navbar.css' 
const AboutUs = () => {
  return (
    <div>
     <Unavbar/>    
    <div className="about-us-container">
      <div className="about-us-content">
        <h2>About Us</h2>
        <p>Welcome to Pet Wellness and Grooming! We are dedicated to providing exceptional care for your furry friends.</p>
        <p>Our team of experienced groomers and pet care professionals is passionate about ensuring the health, happiness, and well-being of every pet that comes through our doors.</p>
        <p>At Pet Wellness and Grooming, we believe in the importance of holistic pet care. That's why we offer a range of grooming services, wellness programs, and additional amenities to cater to your pet's individual needs.</p>
        <p>With a focus on quality, safety, and personalized attention, we strive to create a comfortable and welcoming environment for both pets and their owners.</p>
        <p>Thank you for choosing Pet Wellness and Grooming for all your pet care needs. We look forward to serving you and your beloved pets!</p>
      </div>
    </div>
    </div>
  );
};

export default AboutUs;
