import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Unavbar from './Unavbar';
import Footer from '../Components/Footer';
import '../Admin/servicess.css';

function Uproducts() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/getproducts`)
      .then((response) => {
        const taskData = response.data;
        setItems(taskData);
      })
      .catch((error) => {
        console.error('Error fetching: ', error);
      });
  }, []);

  

  return (
    <div>
      <Unavbar />
      <br />
      <h1 style={{ display: "flex", justifyContent: "center", fontSize: '35px' }}>Products</h1>
      <div className="card-container">
        {items.map((i) =>
          <div className="card" key={i._id}>
            <img src={i.imageURL} className="card-image" style={{ width: "100%", height: "250px" }} />
            <hr />
            <br />
            <div className="card-content">
              <h2 className="card-title">{i.name}</h2>
              <p><strong>Price:</strong>{i.price}</p>
              <p><strong>Category:</strong>{i.category}</p>
              <p className="card-description"><strong style={{ color: "black" }}>Description:</strong>{i.description.slice(0, 100)}...</p>
            </div>
            <br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button style={{ backgroundColor: 'rebeccapurple', border: 'none', width: "100px", height: "35px", borderRadius: "22px", marginRight: "10px" }}>
                <Link to={`/orderproduct/${i._id}`} style={{ color: 'white', textDecoration: 'none', fontSize: "18px" }}>
                  Buy Now
                </Link>
              </button>
              
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Uproducts;
