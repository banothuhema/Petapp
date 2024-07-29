import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Admin/servicess.css';
import Navbar from './Navbar';

function Product() {
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

  return (
    <div>
      <Navbar />
      <br />
      <h1 style={{ display: "flex", justifyContent: "center", fontSize: '35px' }}>Products</h1>
      <div className="card-container">
        {items.map((item) => (
          <div className="card" key={item._id}>
            <img src={item.imageURL} alt={item.name} className="card-image" style={{ width: "100%", height: "250px" }} />
            <hr />
            <br />
            <div className="card-content" >
              <h2 className="card-title">{item.name}</h2>
              <p><strong>Price:</strong> {item.price}</p>
              <p><strong>Category:</strong> {item.category}</p>
              <p className="card-description"><strong style={{ color: "black" }}>Description:</strong> {item.description.length > 100 ? `${item.description.slice(0, 100)}...` : item.description}</p>
            </div>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
