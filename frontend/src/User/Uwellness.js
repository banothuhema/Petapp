import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import './servicess.css'; 
import { Link } from 'react-router-dom';
import { FaEdit,  FaTrash } from "react-icons/fa";
import Unavbar from './Unavbar';


const Uwellness = () => {
  const [wellnessServices, setWellnessServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    <Unavbar/>
    <h1 className='m-5  text-3xl' style={{paddingLeft:'570px'}}>Wellness Services</h1>
    <div style={{display:"grid", gridTemplateColumns:"auto auto auto ",justifyContent:"space-evenly"}}>
    {wellnessServices.map((i)=>
        <div  key={i._id} style={{width:"450px",border:"0.5px solid lightgray",margin:"15px",padding:"22px",borderRadius:"5px"}}>
            <div  >
                <h2 style={{display:"flex",justifyContent:"center",fontSize:"30px"}}>{i.name}</h2>
                <p><strong>Price:</strong>{i.price}</p>
                <p><strong> includes Nutrition counseling:</strong>{i.nutritionCounselling?"yes":"no"}</p>
                <p><strong>includes Exercise recommendations:</strong>{i.exerciseRecommendations?"yes":"no"}</p>
                <p><strong>includesPreventive healthcare:</strong>{i.preventiveHealthcare?"yes":"no"}</p>
                <p><strong>includes Regular check-ups:</strong>{i.regularCheckUps?"yes":"no"}</p>
                <p><strong>includes vaccinations:</strong>{i.vaccinations?"yes":"no"}</p>
                <p className="card-description"><strong style={{color:"black"}}>Description:</strong>{i.description.slice(0,170)}...</p>
            </div>
            <br/>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <button style={{ backgroundColor: 'rebeccapurple', border: 'none',width:"100px",height:"35px",borderRadius:"22px" }}>
                    <Link to={`/bookwellness/${i._id}`} style={{ color: 'white', textDecoration: 'none',fontSize:"18px" }}>
                      Book Now
                    </Link>
                  </button>
        </div>
        </div>
    )}
</div>
  </div>
   
  );
};

export default Uwellness;
