import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const Header = () => {
  return (
    <div className="p-5 mb-4 bg-light rounded-3 mt-1">
        <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">Enjoy the coastal delicacy</h1>
            <p className="col-md-8 fs-4">Discover the best Seafood cuisine in your area</p>
            <Link to="/explore" className="btn btn-primary btn-lg">Explore</Link>
        </div>
    </div>
  )
}

export default Header;
