import React from 'react';
import Navbar from './Navbar';

function Services() {
  return (
    <div>
    <Navbar/>
    <br/>
    {/* <h2 className="services-title text-3xl font-semibold mb-4">Our Services</h2>   */}
    <div style={{display:"flex",justifyContent:"center"}}>
    <div className=" p-8 bg-gray-100 rounded-lg shadow-lg" style={{width:"1200px"}}>    
      <div >
        <h3 className="service-category-title text-2xl font-semibold mb-4 text-center">Grooming Services</h3>
        <p className="mb-4">Our experienced groomers provide top-notch grooming services tailored to your pet's needs. Services include:</p>
        <ul className="service-list list-disc pl-4">
          <li className="mb-1">Bathing and shampooing</li>
          <li className="mb-1">Hair trimming and styling</li>
          <li className="mb-1">Nail trimming and filing</li>
          <li className="mb-1">Ear cleaning</li>
          <li className="mb-1">Teeth brushing</li>
          <li className="mb-1">And more!</li>
        </ul>
      </div>
      
      <div >
        <h3 className="service-category-title text-2xl font-semibold mb-4 text-center">Wellness Services</h3>
        <p className="mb-4">We believe in holistic pet care, which is why we offer wellness services to support your pet's overall health and well-being. Our wellness services include:</p>
        <ul className="service-list list-disc pl-4">
          <li className="mb-1">Nutrition counseling</li>
          <li className="mb-1">Exercise recommendations</li>
          <li className="mb-1">Preventive healthcare</li>
          <li className="mb-1">Regular check-ups</li>
          <li className="mb-1">Vaccinations</li>
          <li className="mb-1">And more!</li>
        </ul>
      </div>
      
      <div >
        <h3 className="service-category-title text-2xl font-semibold mb-4 text-center">Additional Services</h3>
        <p className="mb-4">In addition to grooming and wellness services, we also provide:</p>
        <ul className="service-list list-disc pl-4">
          <li className="mb-1">Boarding and daycare</li>
          <li className="mb-1">Training classes</li>
          <li className="mb-1">Pet photography</li>
          <li className="mb-1">And more!</li>
        </ul>
      </div>
      
      <p className="service-contact text-lg">For more information about our services or to schedule an appointment, please contact us.</p>
    </div>
    </div>
    </div>
  );
}

export default Services;
