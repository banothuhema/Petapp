import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Anavbar from './Anavbar';
import { Link, useNavigate } from 'react-router-dom';
import { FaEdit,  FaTrash } from "react-icons/fa";


const GetAdditional = () => {
  const [addtionalServices, setAdditionalServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate =useNavigate()

  useEffect(() => {
    // Function to fetch grooming services data
    const fetchAdditionalServices = async () => {
      try {
        const response = await axios.get('http://localhost:8000/getadditional');
        setAdditionalServices(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    // Call the fetch function when the component mounts
    fetchAdditionalServices();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const deleteadditional =((id)=>{
    axios.delete(`http://localhost:8000/deleteadditional/${id}`)
    .then(()=>{
          alert("service deleted successfully")
          window.location.assign('/getadditional')
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
            <button onClick={()=>{navigate('/additional')}} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Create Service</button>
    </div>
    <div className="card-container">
    {addtionalServices.map((i)=>
        <div className="card" key={i._id}>
            <div className="card-content" >
                <h2 className="card-title" style={{display:"flex",justifyContent:"center",fontSize:"30px"}}>{i.name}</h2>
                <p><strong>Price:</strong>{i.price}</p>
                <p><strong>Includes Boarding And Daycare:</strong> {i. boardingAndDaycare? 'Yes' : 'No'}</p>
                <p><strong>Includes Training Classes: </strong>{i.trainingClasses? 'Yes' : 'No'}</p>
                <p className="card-description"><strong style={{color:"black"}}>Description:</strong>{i.description.slice(0,100)}...</p>
            </div>
            <div className="card-actions" style={{display:"flex"}}>
                <Link to={`/updateadditional/${i._id}`}><FaEdit color='blue'/></Link>
                <button  onClick={()=>{deleteadditional(i._id)}}><FaTrash color='red'/></button>
            </div>
        </div>
    )}
</div>
  </div>
  );
};

export default GetAdditional;
