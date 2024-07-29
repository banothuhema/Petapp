import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaEdit,  FaTrash } from "react-icons/fa";
import Anavbar from './Anavbar';
import './servicess.css'

function GetProducts() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/getproducts`)
      .then((response) => {
        const taskData = response.data;
        console.log('Fetched events:', taskData);
        setItems(taskData);
      })
      .catch((error) => {
        console.error('Error fetching: ', error);
      });
  }, []);

  const deleteproduct =(id)=>{
    axios.delete(`http://localhost:8000/deleteproducts/${id}`)
    .then(()=>{
          alert("product deleted successfully")
          window.location.assign('/getproducts')
    })
    .catch((error) => {
        console.error('Error in deleting : ', error);
      });
  }

  return (
   <div>
    <Anavbar/>
    <h1 className='text-center text-4xl'>Products</h1>
    <div className="card-container">
    {items.map((i)=>
        <div className="card" key={i._id}>
            <img src={i.imageURL}  className="card-image" style={{width:"100%",height:"250px"}} />
            <hr/>
            <br/>
            <div className="card-content" >
                <h2 className="card-title">{i.name}</h2>
                <p><strong>Price:</strong>{i.price}</p>
                <p><strong>Category:</strong>{i.category}</p>
                <p className="card-description"><strong style={{color:"black"}}>Description:</strong>{i.description.slice(0,100)}...</p>
            </div>
            <div className="card-actions" style={{display:"flex"}}>
                <Link to={`/updateproduct/${i._id}`}><FaEdit color='blue'/></Link>
                <button onClick={()=>{deleteproduct(i._id)}}><FaTrash color='red'/></button>
            </div>
        </div>
    )}
</div>
  </div>
  );
}

export default GetProducts;
