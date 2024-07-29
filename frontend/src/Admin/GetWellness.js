import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Anavbar from './Anavbar';
import './servicess.css'; 
import { Link, useNavigate } from 'react-router-dom';
import { FaEdit,  FaTrash } from "react-icons/fa";


const GetWellness = () => {
  const [wellnessServices, setWellnessServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate =useNavigate()

  useEffect(() => {
    const fetchWellnessServices = async () => {
      try {
        const response = await axios.get('http://localhost:8000/getwellness');
        setWellnessServices(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWellnessServices();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const deletewellness =((id)=>{
    axios.delete(`http://localhost:8000/deletewellness/${id}`)
    .then(()=>{
          alert("service deleted successfully")
          window.location.assign('/getwellness')
    })
    .catch((error) => {
        console.error('Error in deleting : ', error);
      });
  })

  return (

    <div>
    <Anavbar/>
    <br/>
    <div style={{display:"flex",justifyContent:"flex-end",marginRight:"50px"}}>
            <button onClick={()=>{navigate('/wellness')}} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Create Service</button>
    </div>
    <div className="card-container">
    {wellnessServices.map((i)=>
        <div className="card" key={i._id}>
            <div className="card-content" >
                <h2 className="card-title" style={{display:"flex",justifyContent:"center",fontSize:"30px"}}>{i.name}</h2>
                <p><strong>Price:</strong>{i.price}</p>
                <p><strong>includesnutritionCounselling:</strong>{i.nutritionCounselling?"yes":"no"}</p>
                <p><strong>includesexerciseRecommendations:</strong>{i.exerciseRecommendations?"yes":"no"}</p>
                <p><strong>includespreventiveHealthcare:</strong>{i.preventiveHealthcare?"yes":"no"}</p>
                <p><strong>includesregularCheckUps:</strong>{i.regularCheckUps?"yes":"no"}</p>
                <p><strong>includesvaccinations:</strong>{i. vaccinations?"yes":"no"}</p>
                <p className="card-description"><strong style={{color:"black"}}>Description:</strong>{i.description.slice(0,100)}...</p>
            </div>
            <br/>
            <div className="card-actions" style={{display:"flex"}}>
                <Link to={`/updatewellness/${i._id}`}><FaEdit color='blue'/></Link>
                <button onClick={()=>{deletewellness(i._id)}}><FaTrash color='red'/></button>
            </div>
        </div>
    )}
</div>
  </div>

  )
};

export default GetWellness;
