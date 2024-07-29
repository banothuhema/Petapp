import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import './App.css';
import Unavbar from "./User/Unavbar";
import Uhome from "./User/Uhome";
import Services from "./Components/Services";
import Aboutus from "./User/Aboutus";
import GroomingServices from "./Admin/GroomingServices";
import GetGroom from "./Admin/GetGroom";
import WellnessServices from "./Admin/WellnessServices";
import GetWellness from "./Admin/GetWellness";
import GetAdditional from "./Admin/GetAddditional";
import AdditionalServices from "./Admin/AdditionalServices";
import Anavbar from "./Admin/Anavbar";
import Products from "./Admin/Products";
import GetProducts from "./Admin/GetProducts";
import UpdateProduct from "./Admin/UpdateProduct";
import UpdateWellness from "./Admin/UpdateWellness";
import UpdateGroom from "./Admin/UpdateGroom";
import UpdateAdditional from "./Admin/UpdateAdditional";
import Uproducts from "./User/Uproducts";
import OrderProduct from "./User/OrderProduct";
import Ulogin from "./User/Ulogin";
import Usignup from "./User/Usignup";
import Mybookings from "./User/MyBookings";
import Ugroom from "./User/Ugroom";
import Uadditional from "./User/Uadditional";
import Uwellness from "./User/Uwellness";
import BookGroom from "./User/BookGroom";
import BookAdditional from "./User/BookAdditional";
import BookWellness from "./User/BookWellness";
import Navbar from "./Components/Navbar";
import Product from "./Components/Product";
import Alogin from "./Admin/Alogin";
import Asignup from "./Admin/Asignup";
import Ahome from "./Admin/Ahome";
import Users from "./Admin/Users";
import UserEdit from "./Admin/UserEdit";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nav" element={<Navbar />} />
        <Route path="/services" element={<Services />} />
        <Route path="/product" element={<Product />} />

        {/* Admin */}
        <Route path="/alogin" element={<Alogin />} />
        <Route path="/asignup" element={<Asignup />} />
        <Route path="/ahome" element={<Ahome />} />
        <Route path="/users" element={<Users />} />
        <Route path="/useredit/:id" element={<UserEdit />} />
        <Route path="/anavbar" element={<Anavbar />} />
        <Route path="/groom" element={<GroomingServices />} />
        <Route path="/getgroom" element={<GetGroom />} />
        <Route path="/updategroom/:id" element={<UpdateGroom />} />
        <Route path="/wellness" element={<WellnessServices />} />
        <Route path="/getwellness" element={<GetWellness />} />
        <Route path="/updatewellness/:id" element={<UpdateWellness />} />
        <Route path="/additional" element={<AdditionalServices />} />
        <Route path="/getadditional" element={<GetAdditional />} />
        <Route path="/updateadditional/:id" element={<UpdateAdditional />} />
        <Route path="/products" element={<Products />} />
        <Route path="/getproducts" element={<GetProducts />} />
        <Route path="/updateproduct/:id" element={<UpdateProduct />} />
        
   


        {/* User */}
        <Route path="/usignup" element={<Usignup />} />
        <Route path="/ulogin" element={<Ulogin />} />
        <Route path="/uhome" element={<Uhome />} />
        <Route path="/ugroom" element={<Ugroom />} />
        <Route path="/uwellness" element={<Uwellness />} />
        <Route path="/uadditional" element={<Uadditional />} />
        <Route path="/bookgroom/:id" element={<BookGroom />} />
        <Route path="/bookadditional/:id" element={<BookAdditional />} />
        <Route path="/bookwellness/:id" element={<BookWellness />} />
        <Route path="/uproducts" element={<Uproducts />} />
        <Route path="/orderproduct/:id" element={<OrderProduct />} />
        <Route path="/mybookings" element={<Mybookings />} />
    
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/Unavbar" element={<Unavbar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
