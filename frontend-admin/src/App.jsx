import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import Menubar from './components/menubar/Menubar';

// Page components
import Addfood from './pages/addfood/Addfood';
import Listfood from './pages/listfoods/Listfood';
import Orders from './pages/orders/Orders';

// Toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className="d-flex" id="wrapper">
      <Sidebar sidebarVisible={sidebarVisible} />

      {/* Page content wrapper */}
      <div id="page-content-wrapper">
        <Menubar toggleSidebar={toggleSidebar} />

        {/* Toast container for notifications */}
        <ToastContainer position="top-right" autoClose={3000} />

        {/* Page content */}
        <div className="container-fluid">
          <Routes>
            <Route path="/add" element={<Addfood />} />
            <Route path="/list" element={<Listfood />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/" element={<Listfood />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
