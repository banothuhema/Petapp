import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaEdit,  FaTrash } from "react-icons/fa";
import Unavbar from './Unavbar';


const Uadditional = () => {
  const [addtionalServices, setAdditionalServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
          window.location.assign('/getadditonal')
    })
    .catch((error) => {
        console.error('Error in deleting : ', error);
      });
  })

  return (
    <div>
    <Unavbar/>
    <h1 className='m-5  text-3xl' style={{paddingLeft:'570px'}}>Additional Services</h1>
    <div style={{display:"grid", gridTemplateColumns:"auto auto auto ",justifyContent:"space-evenly"}}>
    {addtionalServices.map((i)=>
        <div  key={i._id} style={{width:"450px",border:"0.5px solid lightgray",margin:"15px",padding:"22px",borderRadius:"5px"}}>
            <div  >
                <h2 style={{display:"flex",justifyContent:"center",fontSize:"30px"}}>{i.name}</h2>
                <p><strong>Price:</strong>{i.price}</p>
                <p><strong>Includes Boarding And Daycare:</strong>{i. boardingAndDaycare?"yes":"no"}</p>
                <p><strong>includes Training Classes:</strong>{i.trainingClasses?"yes":"no"}</p>
                <p className="card-description"><strong style={{color:"black"}}>Description:</strong>{i.description.slice(0,170)}...</p>
            </div>
            <br/>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <button style={{ backgroundColor: 'rebeccapurple', border: 'none',width:"100px",height:"35px",borderRadius:"22px" }}>
                    <Link to={`/bookadditional/${i._id}`} style={{ color: 'white', textDecoration: 'none',fontSize:"18px" }}>
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

export default Uadditional;
