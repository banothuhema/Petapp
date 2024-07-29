import React, { useState } from 'react';
import axios from 'axios';
import './admin.css';
import Anavbar from './Anavbar';
import { useNavigate } from 'react-router-dom';

const AdditionalServices = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    boardingAndDaycare: false,
    trainingClasses: false,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, description, price, boardingAndDaycare, trainingClasses } = formData;

    axios
      .post('http://localhost:8000/additional', {
        name,
        description,
        price,
        boardingAndDaycare,
        trainingClasses,
      })
      .then(() => {
        alert('Data added successfully');
        navigate('/getadditional');
      })
      .catch((error) => {
        console.error('Error in adding:', error);
      });
  };

  return (
    <div>
      <Anavbar />
      <br />
      <div className="flex justify-center">
        <div className="w-96 border border-gray-300 p-4 rounded-md bg-gray-100" style={{ width: '550px' }}>
          <h2 className="text-center text-2xl">Create Additional Service</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <br />
              <div>
                <label className="block mb-1">Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 p-2 rounded-md w-full"
                />
              </div>
              <br />
              <div>
                <label>Price:</label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 p-2 rounded-md w-full"
                />
              </div>
              <br />
              <br />
              <div>
                <label>Description:</label>
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
            <br />
            <div>
              <label>Includes Boarding And Daycare:</label>
              <input
                type="checkbox"
                name="boardingAndDaycare"
                checked={formData.boardingAndDaycare}
                onChange={handleChange}
                style={{ marginLeft: '55px' }}
              />
            </div>
            <div>
              <label>Includes Training Classes:</label>
              <input
                type="checkbox"
                name="trainingClasses"
                checked={formData.trainingClasses}
                onChange={handleChange}
                style={{ marginLeft: '55px' }}
              />
            </div>
            <br />
            <div className="flex justify-center">
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                Create Service
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdditionalServices;
