import React from 'react';
import Menubar from './components/menubar/Menubar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Contactus from './pages/contactus/Contactus';
import Explorefood from './pages/explorefood/Explorefood';
import Fooddetails from './pages/fooddetails/Fooddetails';
import Cart from './pages/cart/Cart';
import Placeorder from './pages/placeorder/Placeorder';
import Login from './components/login/Login';
import Register from './components/register/Register';
const App = () => {
  return (
    <div>
      <Menubar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explorefood />} />
        <Route path="/contact-us" element={<Contactus />} />
        <Route path="/food/:id" element={<Fooddetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Placeorder />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  )
}

export default App
