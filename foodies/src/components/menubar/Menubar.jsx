import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import './Menubar.css';
import { assets } from '../../assets/assets.js'; // Assuming this is where your image URLs are
import { StoreContext } from '../../context/Storecontext'; // Corrected import path

const Menubar = () => {
    const { quantities } = useContext(StoreContext);
    const uniqueItemCount = Object.keys(quantities).length;
    const navigate = useNavigate(); // Initialize useNavigate

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    <img src={assets.logo} className="logo" height={48} width={48} alt="Logo" />
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link nav-link-highlight-bg" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link nav-link-highlight-bg" to="/explore">Explore</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link nav-link-highlight-bg" to="/contact-us">Contact Us</Link>
                        </li>
                    </ul>
                    <div className="d-flex align-items-center gap-4">
                        <Link to="/cart" className="position-relative">
                            <div className="position-relative">
                                <img src={assets.cart} alt="Cart" height={48} width={48} className="position-relative" />
                                {uniqueItemCount > 0 && (
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
                                        {uniqueItemCount}
                                    </span>
                                )}
                            </div>
                        </Link>
                        <button className="btn btn-outline-primary ms-3" type="button" onClick={() => navigate('/login')}>Login</button>
                        <button className="btn btn-primary ms-2" type="button" onClick={() => navigate('/register')}>Sign Up</button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Menubar;
