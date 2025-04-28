import React, { useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/Storecontext';
import 'bootstrap-icons/font/bootstrap-icons.css';

const FoodDetails = () => {
    const { id } = useParams();
    const { foodList, addToCart } = useContext(StoreContext); // Get addToCart from context
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();

    const food = foodList?.find(item => item.id.toString() === id);

    if (!food) {
        return <div className="text-center mt-4">Food item not found.</div>;
    }

    const handleAddToCart = () => {
        addToCart(food.id, quantity);
        navigate('/cart'); // Redirect to cart page after adding
    };

    const incrementQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    return (
        <div className="container px-4 px-lg-5 my-5">
            <div className="row gx-4 gx-lg-5 align-items-center">
                <div className="col-md-6">
                    <img
                        className="card-img-top mb-5 mb-md-0"
                        src={food.imageUrl}
                        alt={food.name}
                    />
                </div>
                <div className="col-md-6">
                    <h1 className="display-5 fw-bolder">{food.name}</h1>
                    <div className="fs-5 mb-5">
                        <span className="text-decoration-line-through text-muted me-2">₹{(food.price * 1.2).toFixed(2)}</span>
                        <span>₹{food.price}</span>
                    </div>
                    <p className="lead">{food.description}</p>
                    <div className="d-flex align-items-center">
                        <div className="input-group me-3" style={{ width: '5rem' }}>
                            <button className="btn btn-outline-dark" type="button" onClick={decrementQuantity}>
                                <i className="bi bi-dash"></i>
                            </button>
                            <input
                                className="form-control text-center"
                                value={quantity}
                                readOnly
                                type="text"
                                aria-label="quantity"
                                aria-describedby="quantityInput"
                            />
                            <button className="btn btn-outline-dark" type="button" onClick={incrementQuantity}>
                                <i className="bi bi-plus"></i>
                            </button>
                        </div>
                        <button
                            className="btn btn-outline-dark flex-shrink-0"
                            type="button"
                            onClick={handleAddToCart}
                        >
                            <i className="bi-cart-fill me-1"></i>
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;