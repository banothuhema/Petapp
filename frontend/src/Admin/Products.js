// GroomingServiceForm.js
import React, { useState } from 'react';
import axios from 'axios';
import './admin.css'

const Products = () => {

const [name,setName]=useState('')
const [description,setDescription]=useState('')
const [price,setPrice]=useState('')
const [category,setCategory]=useState('')
const [imageURL,setImageURL]=useState('')


  
const handleSubmit = (e) => {
    e.preventDefault();
  
    const formData = { name, description, price, imageURL, category };
  
    axios.post('http://localhost:8000/products', formData)
      .then(() => {
        alert("Data added successfully");
      })
      .catch((error) => {
        console.error("Error in adding:", error);
      });
  };
  
 
  return (
    
    <div className="grooming-form-container">
      <h2>Create Product</h2>
      <form onSubmit={handleSubmit} className="grooming-form">
        <label>Name:</label>
        <input type="text" name="name" placeholder='Name' value={name} onChange={((e)=>{setName(e.target.value)})} required />

        <label>Description:</label>
        <textarea name="description"  placeholder="Description" value={description} onChange={((e)=>{setDescription(e.target.value)})}></textarea>

        <label>Price:</label>
        <input type="number" name="price" placeholder='price' value={price} onChange={((e)=>{setPrice(e.target.value)})}  />

        <label>Category:</label>
        <input type="text" name="category" placeholder='category' value={category} onChange={((e)=>{setCategory(e.target.value)})}  />
      
        <label >Image Url:</label>
        <input type="text" name="imageURL" placeholder='ImgUrl' value={imageURL} onChange={((e)=>{setImageURL(e.target.value)})} />
        
 <br/>
        <button type="submit">Create Product</button>
      </form>
    </div>
  );
};

export default Products;
