import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/Storecontext';
import './Cart.css';

function Cart() {
  const { foodList, increaseQuantity, decreaseQuantity, quantities, removeFromCart } = useContext(StoreContext);
  const navigate = useNavigate(); // Initialize useNavigate

  const cartItems = foodList.filter(item => quantities[item.id] > 0);

  const subTotal = cartItems.reduce((total, item) => total + (item.price * quantities[item.id]), 0);
  const discount = 0.2 * subTotal;
  const shipping = subTotal === 0 ? 0 : 50;
  const total = subTotal - discount + shipping;

  const formatINR = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2,
    }).format(price);
  };

  const handleRemove = (itemId) => {
    removeFromCart(itemId);
  };

  const handleCheckout = () => {
    navigate('/order'); // Use navigate to go to the order page
  };

  return (
    <div className="cart-wrapper">
      <div className="container">
        <div className="row g-4">
          {/* Cart Items Section */}
          <div className="col-lg-8">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h4 className="mb-0">Shopping Cart</h4>
              <span className="text-muted">{cartItems.length} items</span>
            </div>

            {cartItems.length === 0 ? (
              <div className="empty-cart">
                <h5>Your cart is empty</h5>
                <Link to="/" className="btn btn-outline-primary mt-3">
                  Back to Shopping
                </Link>
              </div>
            ) : (
              <div className="d-flex flex-column gap-3">
                {cartItems.map(item => (
                  <div key={item.id} className="product-card p-3 shadow-sm">
                    <div className="row align-items-center">
                      <div className="col-md-2">
                        <img src={item.imageUrl} alt={item.name} className="product-image" />
                      </div>
                      <div className="col-md-4">
                        <h6 className="mb-1">{item.name}</h6>
                        <p className="text-muted mb-0">{item.description}</p>
                        {item.discount && (
                          <span className="discount-badge mt-2">{item.discount}% OFF</span>
                        )}
                      </div>
                      <div className="col-md-3">
                        <div className="d-flex align-items-center gap-2">
                          <button className="quantity-btn" onClick={() => decreaseQuantity(item.id)}>
                            -
                          </button>
                          <input
                            type="number"
                            className="quantity-input"
                            value={quantities[item.id]}
                            min="1"
                            readOnly
                          />
                          <button className="quantity-btn" onClick={() => increaseQuantity(item.id)}>
                            +
                          </button>
                        </div>
                      </div>
                      <div className="col-md-2">
                        <span className="fw-bold">{formatINR(item.price * quantities[item.id])}</span>
                      </div>
                      <div className="col-md-1">
                        <i
                          className="bi bi-trash remove-btn"
                          onClick={() => handleRemove(item.id)}
                          style={{ cursor: 'pointer' }}
                        ></i>
                      </div>
                    </div>
                  </div>
                ))}
                <Link to="/" className="btn btn-outline-primary mt-3">
                  Back to Shopping
                </Link>
              </div>
            )}
          </div>

          {/* Summary Section */}
          <div className="col-lg-4">
            <div className="summary-card p-4 shadow-sm">
              <h5 className="mb-4">Order Summary</h5>

              <div className="d-flex justify-content-between mb-3">
                <span className="text-muted">Subtotal</span>
                <span>{formatINR(subTotal)}</span>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span className="text-muted">Discount</span>
                <span className="text-success">-{formatINR(discount)}</span>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span className="text-muted">Shipping</span>
                <span>{formatINR(shipping)}</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between mb-4">
                <span className="fw-bold">Total</span>
                <span className="fw-bold">{formatINR(total)}</span>
              </div>

              {/* Checkout Button */}
              <button className="btn btn-primary checkout-btn w-100 mb-3" onClick={handleCheckout}>
                Proceed to Checkout
              </button>

              <div className="d-flex justify-content-center gap-2">
                <i className="bi bi-shield-check text-success"></i>
                <small className="text-muted">Secure checkout</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
