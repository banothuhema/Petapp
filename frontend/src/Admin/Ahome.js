import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Anavbar from './Anavbar';

function Ahome() {
  const [users, setUsers] = useState([]);
  const [groomServices, setGroomServices] = useState([]);
  const [wellnessServices, setWellnessServices] = useState([]);
  const [additionalServices, setAdditionalServices] = useState([]);
  const [products, setProducts] = useState([]);
  const [getgroombooking, setGroombooking] = useState([]);
  const [getwellnessbooking, setWellnessbooking] = useState([]);
  const [getadditionalbooking, setAdditionalbooking] = useState([]);
  const [getproductbooking, setProductsbooking] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Fetch user data
    axios.get(`http://localhost:8000/users`)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching users: ', error);
      });

    // Fetch Grooming data
    axios.get(`http://localhost:8000/getgroom`)
      .then((response) => {
        setGroomServices(response.data);
      })
      .catch((error) => {
        console.error('Error fetching grooming services: ', error);
      });

    // Fetch wellnessServices data
    axios.get(`http://localhost:8000/getwellness`)
      .then((response) => {
        setWellnessServices(response.data);
      })
      .catch((error) => {
        console.error('Error fetching wellness services: ', error);
      });

    // Fetch Additional services data
    axios.get(`http://localhost:8000/getadditional`)
      .then((response) => {
        setAdditionalServices(response.data);
      })
      .catch((error) => {
        console.error('Error fetching additional services: ', error);
      });

    // Fetch Products data
    axios.get(`http://localhost:8000/getproducts`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching products: ', error);
      });

    // Fetch wishlist data
    axios.get(`http://localhost:8000/getwishlist`)
      .then((response) => {
        setWishlist(response.data);
      })
      .catch((error) => {
        console.error('Error fetching wishlist: ', error);
      });

    // Fetch cart data
    axios.get(`http://localhost:8000/getcart`)
      .then((response) => {
        setCart(response.data);
      })
      .catch((error) => {
        console.error('Error fetching cart: ', error);
      });

    // Fetch total bookings data
    axios.get(`http://localhost:8000/getgroombooking`)
      .then((response) => {
        setGroombooking(response.data);
      })
      .catch((error) => {
        console.error('Error fetching grooming bookings: ', error);
      });

    axios.get(`http://localhost:8000/getwellnessbooking`)
      .then((response) => {
        setWellnessbooking(response.data);
      })
      .catch((error) => {
        console.error('Error fetching wellness bookings: ', error);
      });

    axios.get(`http://localhost:8000/getadditionalbooking`)
      .then((response) => {
        setAdditionalbooking(response.data);
      })
      .catch((error) => {
        console.error('Error fetching additional bookings: ', error);
      });

    axios.get(`http://localhost:8000/getproductbooking`)
      .then((response) => {
        setProductsbooking(response.data);
      })
      .catch((error) => {
        console.error('Error fetching product bookings: ', error);
      });

  }, []);

  // Calculate totals
  const totalUsers = users.length;
  const totalGroomServices = groomServices.length;
  const totalWellnessServices = wellnessServices.length;
  const totalAdditionalServices = additionalServices.length;
  const totalProducts = products.length;
  const totalGroomBookings = getgroombooking.length;
  const totalWellnessBookings = getwellnessbooking.length;
  const totalAdditionalBookings = getadditionalbooking.length;
  const totalProductBookings = getproductbooking.length;
  const totalWishlistItems = wishlist.length;
  const totalCartItems = cart.length;
  const totalOrders = totalGroomBookings + totalWellnessBookings + totalAdditionalBookings + totalProductBookings;

  // Data for the bar chart
  const data = [
    { name: 'Users', value: totalUsers, fill: 'purple' },
    { name: 'Grooming Services', value: totalGroomServices, fill: 'darkcyan' },
    { name: 'Wellness Services', value: totalWellnessServices, fill: 'coral' },
    { name: 'Additional Services', value: totalAdditionalServices, fill: 'orange' },
    { name: 'Products', value: totalProducts, fill: 'red' },
    { name: 'Wishlist Items', value: totalWishlistItems, fill: 'blue' },
    { name: 'Cart Items', value: totalCartItems, fill: 'pink' },
    { name: 'Bookings', value: totalOrders, fill: 'green' },
  ];

  return (
    <div>
      <Anavbar />
      <h3 className="text-center text-3xl" style={{ color: "purple" }}>Dashboard</h3>
      <Card body style={{ background: "whitesmoke", width: "93%", marginLeft: "3.7%", marginTop: "20px", height: "680px" }}>
        <div className="flex justify-around p-2">
          <Link to="/users" style={{ textDecoration: "none" }}>
            <div className="w-64 h-32 rounded-lg shadow-md flex flex-col justify-center items-center text-xl font-bold text-gray-800 text-center" style={{ backgroundColor: "purple" }}>
              USERS <br /> <br /> {totalUsers}
            </div>
          </Link>
          <Link to="/getgroom" style={{ textDecoration: "none" }}>
            <div className="w-64 h-32 rounded-lg shadow-md flex flex-col justify-center items-center text-xl font-bold text-gray-800 text-center" style={{ backgroundColor: "darkcyan" }}>
              Grooming <br /> <br /> {totalGroomServices}
            </div>
          </Link>
          <Link to="/getwellness" style={{ textDecoration: "none" }}>
            <div className="w-64 h-32 rounded-lg shadow-md flex flex-col justify-center items-center text-xl font-bold text-gray-800 text-center" style={{ backgroundColor: "coral" }}>
              Wellness <br /> <br /> {totalWellnessServices}
            </div>
          </Link>
          <Link to="/getadditional" style={{ textDecoration: "none" }}>
            <div className="w-64 h-32 rounded-lg shadow-md flex flex-col justify-center items-center text-xl font-bold text-gray-800 text-center" style={{ backgroundColor: "orange" }}>
              Additional <br /> <br /> {totalAdditionalServices}
            </div>
          </Link>
        </div>
        <br />
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <Link to="/getproducts" style={{ textDecoration: "none" }}>
            <div className="w-64 h-32 rounded-lg shadow-md flex flex-col justify-center items-center text-xl font-bold text-gray-800 text-center" style={{ backgroundColor: "red" }}>
              Products <br /> <br /> {totalProducts}
            </div>
          </Link>
          <Link to="/getwishlist" style={{ textDecoration: "none" }}>
            <div className="w-64 h-32 rounded-lg shadow-md flex flex-col justify-center items-center text-xl font-bold text-gray-800 text-center" style={{ backgroundColor: "blue" }}>
              Wishlist <br /> <br /> {totalWishlistItems}
            </div>
          </Link>
          <Link to="/getcart" style={{ textDecoration: "none" }}>
            <div className="w-64 h-32 rounded-lg shadow-md flex flex-col justify-center items-center text-xl font-bold text-gray-800 text-center" style={{ backgroundColor: "pink" }}>
              Cart <br /> <br /> {totalCartItems}
            </div>
          </Link>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <div className="w-64 h-32 rounded-lg shadow-md flex flex-col justify-center items-center text-xl font-bold text-gray-800 text-center" style={{ backgroundColor: "green" }}>
              Total Bookings <br /> <br /> {totalOrders}
            </div>
          </Link>
        </div>
        <br />
        <br />
        <div style={{ paddingLeft: "450px" }}>
          <BarChart width={400} height={300} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </div>
      </Card>
    </div>
  );
}

export default Ahome;
