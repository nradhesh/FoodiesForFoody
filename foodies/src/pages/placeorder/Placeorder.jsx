import React, { useState, useEffect, useContext } from 'react';
import { StoreContext } from '../../context/Storecontext';
import "./Placeorder.css";
import { Image } from 'lucide-react'; // Import the Image component

function Placeorder() {
    const { quantities, foodList } = useContext(StoreContext);

    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const usdToInr = 83;

    const formatINR = (price) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR'
        }).format(price);
    }

    useEffect(() => {
        // 1. Get cart items from quantities and foodList
        const itemsInCart = Object.entries(quantities)
            .filter(([, quantity]) => quantity > 0)
            .map(([foodId, quantity]) => {
                const food = foodList.find(f => f.id === foodId);
                return food ? { ...food, quantity } : null;
            })
            .filter(item => item !== null);

        setCartItems(itemsInCart);

        // 2. Calculate total
        const calculatedTotalPrice = itemsInCart.reduce((acc, item) => {
            return acc + (item.price * item.quantity);  // Removed usdToInr here
        }, 0);
        setTotalPrice(calculatedTotalPrice ); // Moved usdToInr multiplication here

    }, [quantities, foodList, usdToInr]);

    return (
        <div className="container">
            <main>
                <div className="py-5 text-center">
                    <h1 className="h2">Checkout form</h1>
 
                </div>

                <div className="row g-5">
                    <div className="col-md-5 col-lg-4 order-md-last">
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-primary">Your cart</span>
                            <span className="badge bg-primary rounded-pill">{cartItems.length}</span>
                        </h4>
                        <ul className="list-group mb-3">
                            {cartItems.map(item => (
                                <li key={item.id} className="list-group-item d-flex justify-content-between lh-sm">
                                    <div>
                                        <h6 className="my-0">{item.name} ({item.quantity})</h6>
                                        <small className="text-body-secondary">{item.description}</small>
                                    </div>
                                    <span className="text-body-secondary">{formatINR(item.price * item.quantity)}</span>
                                </li>
                            ))}
                            <li className="list-group-item d-flex justify-content-between">
                                <span>Total (INR)</span>
                                <strong>{formatINR(totalPrice)}</strong>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-7 col-lg-8">
                        <h4 className="mb-3">Billing address</h4>
                        <form className="needs-validation" noValidate>
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <label htmlFor="firstName" className="form-label">
                                        First name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="firstName"
                                        placeholder=""
                                        value=""
                                        required
                                    />
                                    <div className="invalid-feedback">
                                        Valid first name is required.
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <label htmlFor="lastName" className="form-label">
                                        Last name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="lastName"
                                        placeholder=""
                                        value=""
                                        required
                                    />
                                    <div className="invalid-feedback">
                                        Valid last name is required.
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="email" className="form-label">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="you@example.com"
                                    />
                                    <div className="invalid-feedback">
                                        Please enter a valid email address.
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="address" className="form-label">
                                        Address
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="address"
                                        placeholder="1234 Main St"
                                        required
                                    />
                                    <div className="invalid-feedback">
                                        Please enter your shipping address.
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="address2" className="form-label">
                                        Address 2 <span className="text-body-secondary">(Optional)</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="address2"
                                        placeholder="Apartment or suite"
                                    />
                                </div>

                                <div className="col-md-5">
                                    <label htmlFor="country" className="form-label">
                                        Country
                                    </label>
                                    <select className="form-select" id="country" required>
                                        <option value="">Choose...</option>
                                        <option>India</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Please select a valid country.
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <label htmlFor="state" className="form-label">
                                        State
                                    </label>
                                    <select className="form-select" id="state" required>
                                        <option value="">Choose...</option>
                                        <option>Karnataka</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Please provide a valid state.
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <label htmlFor="zip" className="form-label">
                                        Zip
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="zip"
                                        placeholder=""
                                        required
                                    />
                                    <div className="invalid-feedback">Zip code required.</div>
                                </div>
                            </div>

                            <hr className="my-4" />

                            <button
                                className="w-100 btn btn-primary btn-lg"
                                type="submit"
                                disabled = {cartItems.length === 0}
                            >
                                Continue to checkout
                            </button>
                        </form>
                    </div>
                </div>
            </main>

            <footer className="my-5 pt-5 text-body-secondary text-center text-small">
                <p className="mb-1">&copy; 2017–2025 Company Name</p>
                <ul className="list-inline">
                    <li className="list-inline-item">
                        <a href="#">Privacy</a>
                    </li>
                    <li className="list-inline-item">
                        <a href="#">Terms</a>
                    </li>
                    <li className="list-inline-item">
                        <a href="#">Support</a>
                    </li>
                </ul>
            </footer>
        </div>
    );
}

export default Placeorder;
