import React, { useState } from 'react';
import axios from 'axios';
import Anavbar from './Anavbar';
import { Navigate, useNavigate } from 'react-router-dom';

const WellnessServices = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    duration: '',
    nutritionCounselling: false,
    exerciseRecommendations: false,
    preventiveHealthcare: false,
    regularCheckUps: false,
    vaccinations: false
  });

const navigate =useNavigate()

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

    const { name, description, price, duration, nutritionCounselling, exerciseRecommendations, preventiveHealthcare, regularCheckUps, vaccinations } = formData;

    axios.post('http://localhost:8000/wellness', {
      name,
      description,
      price,
      duration,
      nutritionCounselling,
      exerciseRecommendations,
      preventiveHealthcare,
      regularCheckUps,
      vaccinations
    })
      .then(() => {
        alert("Data added successfully");
        navigate('/getwellness')
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
          <h2 className='text-center text-2xl'>Create Wellness Service</h2>
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
            <label >Includes Nutrition Counselling:</label>
              <input type="checkbox" name="nutritionCounselling" checked={formData.nutritionCounselling} onChange={handleChange} style={{marginLeft:"55px"}}/>
            </div>
              <div>
              <label >Includes Exercise Recommendations:</label>
              <input type="checkbox" name="exerciseRecommendations" checked={formData.exerciseRecommendations} onChange={handleChange}  style={{marginLeft:"55px"}} />
           </div>  
             <div>
             <label >Includes Preventive Healthcare:</label>
              <input type="checkbox" name="preventiveHealthcare" checked={formData.preventiveHealthcare} onChange={handleChange}  style={{marginLeft:"55px"}} />
           </div>  
              <div>
              <label >Includes Regular CheckUps:</label>
              <input type="checkbox" name="regularCheckUps" checked={formData.regularCheckUps} onChange={handleChange} style={{marginLeft:"55px"}}/>
              </div>
              <div>
              <label  >Includes Vaccinations:</label>
              <input type="checkbox" name="vaccinations" checked={formData.vaccinations} onChange={handleChange}  style={{marginLeft:"55px"}}/>
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

export default WellnessServices;
