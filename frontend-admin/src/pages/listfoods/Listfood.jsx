import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { getFoods, deleteFood } from '../../services/Foodservice'; // Import from the services

function Listfood() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const data = await getFoods();
        setFoods(data);
      } catch (error) {
        console.error('Error fetching food items:', error);
        toast.error('Failed to fetch food items');
      }
    };

    fetchFoods();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteFood(id);
      setFoods((prevFoods) => prevFoods.filter((food) => food.id !== id));
      toast.success('Food item deleted successfully');
    } catch (error) {
      console.error('Error deleting food item:', error);
      toast.error('Failed to delete food item');
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Food Items</h2>
      {foods.length === 0 ? (
        <p>No food items available</p>
      ) : (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Category</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {foods.map((food) => (
              <tr key={food.id}>
                <td>{food.name}</td>
                <td>{food.description}</td>
                <td>{food.category}</td>
                <td>${food.price}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(food.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Listfood;
