import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Unavbar from './Unavbar';
import { Link } from 'react-router-dom';


const Ugroom = () => {
  const [groomingServices, setGroomingServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">Error: {error}</p>;

  const deleteproduct =((id)=>{
    axios.delete(`http://localhost:8000/deletegrooming/${id}`)
    .then(()=>{
          alert("service deleted successfully")
          window.location.assign('/getgroom')
    })
    .catch((error) => {
        console.error('Error in deleting : ', error);
      });
  })

  return (
    <div>
    <Unavbar/>
    <h1 className='m-5  text-3xl' style={{paddingLeft:'570px'}}>Grooming Services</h1>
    <div style={{display:"grid", gridTemplateColumns:"auto auto auto ",justifyContent:"space-evenly"}}>
    {groomingServices.map((i)=>
        <div  key={i._id} style={{width:"450px",border:"0.5px solid lightgray",margin:"15px",padding:"22px",borderRadius:"5px"}}>
            <div  >
                <h2 style={{display:"flex",justifyContent:"center",fontSize:"30px"}}>{i.name}</h2>
                <p><strong>Price:</strong>{i.price}</p>
                <p><strong>includesBath:</strong>{i.includesBath?"yes":"no"}</p>
                <p><strong>includesHairTrimming:</strong>{i.includesHairTrimming?"yes":"no"}</p>
                <p><strong>includesNailTrimming:</strong>{i.includesNailTrimming?"yes":"no"}</p>
                <p><strong>includesEarCleaning:</strong>{i.includesEarCleaning?"yes":"no"}</p>
                <p><strong>includesTeethBrushing:</strong>{i.includesTeethBrushing?"yes":"no"}</p>
                <p className="card-description"><strong style={{color:"black"}}>Description:</strong>{i.description.slice(0,170)}...</p>
            </div>
            <br/>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <button style={{ backgroundColor: 'rebeccapurple', border: 'none',width:"100px",height:"35px",borderRadius:"22px" }}>
                    <Link to={`/bookgroom/${i._id}`} style={{ color: 'white', textDecoration: 'none',fontSize:"18px" }}>
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

export default Ugroom;
