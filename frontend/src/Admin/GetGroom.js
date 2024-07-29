import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Anavbar from './Anavbar'; // Ensure this path is correct
import { Link, useNavigate } from 'react-router-dom';
import { FaEdit, FaTrash } from "react-icons/fa";

const GetGroom = () => {
  const [groomingServices, setGroomingServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchGroomingServices = async () => {
      try {
        const response = await axios.get('http://localhost:8000/getgroom');
        setGroomingServices(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGroomingServices();
  }, []);

  const deleteService = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/deletegrooming/${id}`);
      setGroomingServices((prevServices) =>
        prevServices.filter((service) => service._id !== id)
      );
      alert("Service deleted successfully");
    } catch (error) {
      console.error('Error deleting service:', error);
      alert("Failed to delete service");
    }
  };

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">Error: {error}</p>;

  return (
    <div>
      <Anavbar />
      <br />
      <div style={{ display: "flex", justifyContent: "flex-end", marginRight: "50px" }}>
        <button
          onClick={() => navigate('/groom')}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Create Service
        </button>
      </div>
      <div className="card-container">
        {groomingServices.map((service) => (
          <div className="card" key={service._id}>
            <div className="card-content">
              <h2 className="card-title" style={{ fontSize: "30px", textAlign: "center" }}>{service.name}</h2>
              <p><strong>Price:</strong> {service.price}</p>
              <p><strong>Includes Bath:</strong> {service.includesBath ? "Yes" : "No"}</p>
              <p><strong>Includes Hair Trimming:</strong> {service.includesHairTrimming ? "Yes" : "No"}</p>
              <p><strong>Includes Nail Trimming:</strong> {service.includesNailTrimming ? "Yes" : "No"}</p>
              <p><strong>Includes Ear Cleaning:</strong> {service.includesEarCleaning ? "Yes" : "No"}</p>
              <p><strong>Includes Teeth Brushing:</strong> {service.includesTeethBrushing ? "Yes" : "No"}</p>
              <p className="card-description"><strong>Description:</strong> {service.description.slice(0, 100)}...</p>
            </div>
            <div className="card-actions" style={{ display: "flex", justifyContent: "center" }}>
              <Link to={`/updategroom/${service._id}`} style={{ marginRight: "10px" }}><FaEdit color='blue' /></Link>
              <button onClick={() => deleteService(service._id)}><FaTrash color='red' /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetGroom;
