// ExploreFood.jsx
import React, { useState } from 'react';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';

const ExploreFood = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    console.log("ExploreFood - Selected Category:", event.target.value); // Debugging
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    console.log("ExploreFood - Search Term:", event.target.value); // Debugging
    // You would likely implement search filtering here as well
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log('ExploreFood - Searching for:', searchTerm, 'in category:', selectedCategory); // Debugging
    // Implement your search submission logic here
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSearchSubmit}>
            <div className="input-group mb-3">
              <select
                className="form-select mt-2"
                style={{ maxWidth: '150px' }}
                value={selectedCategory}
                onChange={handleCategoryChange}
              >
                <option value="All">All</option>
                <option value="Fish">Fish</option>
                <option value="Non Veg">Non Veg</option>
                <option value="Veg">Veg</option>
                <option value="Snacks">Snacks</option>
              </select>
              <input
                type="text"
                className="form-control mt-2"
                placeholder="Search food..."
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <button className="btn btn-primary mt-2" type="submit">
                <i className="bi bi-search"></i>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Display filtered food items */}
      <FoodDisplay category={selectedCategory} searchTerm={searchTerm} /> {/* Pass searchTerm as well if needed for future search filtering */}
    </div>
  );
};

export default ExploreFood;