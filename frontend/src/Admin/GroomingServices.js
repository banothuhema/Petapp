import React, { useState } from 'react';
import axios from 'axios';
import Anavbar from './Anavbar';
import { useNavigate } from 'react-router-dom';

const GroomingServices = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    duration: '',
    includesBath: false,
    includesHairTrimming: false,
    includesNailTrimming: false,
    includesEarCleaning: false,
    includesTeethBrushing: false
  });

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData({
      ...formData,
      [name]: newValue
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, description, price, duration, includesBath, includesHairTrimming, includesNailTrimming, includesEarCleaning, includesTeethBrushing } = formData;
    axios.post('http://localhost:8000/groom', {
      name,
      description,
      price,
      duration,
      includesBath,
      includesHairTrimming,
      includesNailTrimming,
      includesEarCleaning,
      includesTeethBrushing
    })
    .then(() => {
      alert("Data added successfully")
      navigate('/getgroom')

    })
    .catch((error) => {
      console.error("Error in adding:", error);
    });
  };

  return (
    <div>
    <Anavbar />
    <br />
    <div className="flex justify-center">
      <div className="w-96 border border-gray-300 p-4 rounded-md bg-gray-100" style={{width:"550px"}}>
        <h2 className='text-center text-2xl'>Create Grooming Service</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <br/>
            <div>
              <label className="block mb-1">Name:</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required className="border border-gray-300 p-2 rounded-md w-full" />
            </div>
            <br/>
            <div>
              <label >Price:</label>
              <input type="number" name="price" value={formData.price} onChange={handleChange} required className="border border-gray-300 p-2 rounded-md w-full" />
            </div>
            <br/>
            <div>
              <label >Duration (in minutes):</label>
              <input type="number" name="duration" value={formData.duration} onChange={handleChange} required className="border border-gray-300 p-2 rounded-md w-full" />
            </div>
            <br/>
            <div>
              <label >Description:</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded-md w-full"
                rows="4"
                required
              ></textarea>
            </div>
          </div>
          <br/>
         
           
          <div>
          <label >Includes Bath:</label>
            <input type="checkbox" name="includesBath" checked={formData.includesBath} onChange={handleChange} style={{marginLeft:"55px"}}/>
          </div>
            <div>
            <label >Includes Ear Cleaning:</label>
            <input type="checkbox" name="includesEarCleaning" checked={formData.includesEarCleaning} onChange={handleChange}  style={{marginLeft:"55px"}} />
         </div>  
           <div>
           <label >Includes Hair Trimming:</label>
            <input type="checkbox" name="includesHairTrimming" checked={formData.includesHairTrimming} onChange={handleChange}  style={{marginLeft:"55px"}} />
         </div>  
            <div>
            <label >Includes Nail Trimming:</label>
            <input type="checkbox" name="includesNailTrimming" checked={formData.includesNailTrimming} onChange={handleChange} style={{marginLeft:"55px"}}/>
            </div>
            <div>
            <label  >Includes Teeth Brushing</label>
            <input type="checkbox" name="includesTeethBrushing" checked={formData.includesTeethBrushing} onChange={handleChange}  style={{marginLeft:"55px"}}/>
            </div>
            <br/>
          <div className="flex justify-center">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Create Service</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  );
};

export default GroomingServices;
