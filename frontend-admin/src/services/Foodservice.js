// Foodservice.js
import axios from 'axios';

const API_URL = 'http://localhost:8080/api/foods';

// Add a new food item
export const addFood = async (foodData, image) => {
  const formData = new FormData();
  formData.append('food', JSON.stringify(foodData));
  formData.append('file', image);

  try {
    const response = await axios.post(API_URL, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    return response;
  } catch (error) {
    throw error;
  }
};

// Fetch all food items
export const getFoods = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Delete a food item
export const deleteFood = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    throw error;
  }
};
