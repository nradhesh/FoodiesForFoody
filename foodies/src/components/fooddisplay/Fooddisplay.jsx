import React, { useContext } from 'react';
import { StoreContext } from '../../context/Storecontext';
import FoodItem from '../../components/fooditem/Fooditem'; // Importing the separated component
const FoodDisplay = ({ category, searchText }) => {
  const { foodList } = useContext(StoreContext);

  console.log("FoodDisplay - Received Category:", category);
  console.log("FoodDisplay - Received Search Text:", searchText);
  console.log("FoodDisplay - foodList:", foodList);

  const normalizedCategory = category ? category.toLowerCase().trim().replace(/\s/g, '') : '';
  const normalizedSearchText = searchText ? searchText.toLowerCase().trim() : '';

  const filteredFoods = foodList.filter(food => {
    const normalizedFoodCategory = food.category ? food.category.toLowerCase().trim().replace(/\s/g, '') : '';
    const normalizedFoodName = food.name ? food.name.toLowerCase().trim() : '';

    const categoryMatch = normalizedCategory === 'all' || normalizedFoodCategory === normalizedCategory;
    const searchMatch = normalizedSearchText
      ? normalizedFoodName.includes(normalizedSearchText)
      : true;

    const shouldInclude = categoryMatch && searchMatch;
    console.log(`Food: ${food.name}, Food Category: "${food.category}", Normalized Food Category (no spaces): "${normalizedFoodCategory}", Current Category: "${category}", Normalized Category (no spaces): "${normalizedCategory}", Search Text: "${searchText}", Normalized Search Text: "${normalizedSearchText}", Category Match: ${categoryMatch}, Search Match: ${searchMatch}, Include: ${shouldInclude}`);
    return shouldInclude;
  });

  console.log("FoodDisplay - filteredFoods:", filteredFoods);

  return (
    <div className="container">
      <div className="row justify-content-center">
        {filteredFoods && filteredFoods.length > 0 ? (
          filteredFoods.map((food) => (
            <div key={food.id} className="col-md-4 mb-4 d-flex justify-content-center">
              <FoodItem food={food} />
            </div>
          ))
        ) : (
          <div className="text-center mt-4">
            <h4>No food items available in the "{category}" category{searchText ? ` matching "${searchText}"` : ''}.</h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default FoodDisplay;