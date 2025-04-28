import React, { useContext } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/Storecontext'; // Adjust the import path if necessary

const FoodItem = ({ food }) => {
  const { increaseQuantity, decreaseQuantity, quantities } = useContext(StoreContext);
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/food/${food.id}`);
  };

  return (
    <div
      className="card shadow-sm h-100 text-decoration-none text-dark"
      style={{ maxWidth: '320px', cursor: 'pointer' }}
      onClick={handleCardClick}
    >
      {food.imageUrl && (
        <img
          src={food.imageUrl}
          className="card-img-top"
          alt={food.name}
          style={{ height: '200px', objectFit: 'cover' }}
        />
      )}
      <div className="card-body">
        <h5 className="card-title">{food.name}</h5>
        <p className="card-text">{food.description}</p>
        <div className="d-flex justify-content-between align-items-center">
          <span className="h5 mb-0">₹{food.price}</span>
          <div>
            <i className="bi bi-star-fill text-warning"></i>
            <i className="bi bi-star-fill text-warning"></i>
            <i className="bi bi-star-fill text-warning"></i>
            <i className="bi bi-star-fill text-warning"></i>
            <i className="bi bi-star-half text-warning"></i>
            <small className="text-muted ms-1">(4.5)</small>
          </div>
        </div>
      </div>
      <div className="card-footer d-flex justify-content-between bg-light">
        <span className="btn btn-primary btn-sm">View Food</span>

        {/* Conditional rendering for quantity management */}
        {quantities[food.id] > 0 ? (
          <div className="d-flex align-items-center gap-2">
            <button
              className="btn btn-secondary btn-sm"
              onClick={(e) => {
                e.stopPropagation(); // Prevent card navigation
                decreaseQuantity(food.id);
              }}
            >
              <i className="bi bi-dash-circle"></i>
            </button>
            <span>{quantities[food.id]}</span>
            <button
              className="btn btn-primary btn-sm"
              onClick={(e) => {
                e.stopPropagation(); // Prevent card navigation
                increaseQuantity(food.id);
              }}
            >
              <i className="bi bi-plus-circle"></i>
            </button>
          </div>
        ) : (
          <button
            className="btn btn-primary btn-sm"
            onClick={(e) => {
              e.stopPropagation(); // Prevent card navigation
              increaseQuantity(food.id);
            }}
          >
            <i className="bi bi-plus-circle"></i>
          </button>
        )}
      </div>
    </div>
  );
};

export default FoodItem;
