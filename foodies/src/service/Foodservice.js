// src/services/Foodservice.js
import axios from 'axios';

const API_URL = "http://localhost:8080/api/foods"; // Define your API URL

export const fetchFoodList = async () => {
  try {
    const response = await axios.get(API_URL);
    console.log("Food List fetched from API:", response.data);
    return response.data; // Return the fetched data from axios response
  } catch (error) {
    console.error("Error fetching food list:", error);
    throw error; // Re-throw the error to be handled by the calling component
  }
};

// You can add other API service functions here, like adding, updating, deleting foods