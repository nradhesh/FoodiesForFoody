import React, { useEffect, useState } from 'react';
import { assets } from '../../assets/assets';
import { addFood } from '../../services/Foodservice';
import { toast } from 'react-toastify';  // Import toast from React Toastify

function Addfood() {
  const [image, setImage] = useState(false);

  const [data, setData] = useState({
    name: '',
    description: '',
    price: '',
    category: 'nonveg'
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleImageClick = () => {
    document.getElementById('image').click();
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!image) {
      toast.error("Please select an image");  // Show error toast
      return;
    }

    try {
      const response = await addFood(data, image);
      if (response.status === 200 || response.status === 201) {
        toast.success('Food added successfully!');  // Success toast
        setData({ name: '', description: '', category: 'nonveg', price: '' });
        setImage(false);  // Clear the image
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to add food item");  // Error toast
    }
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="card col-md-6">
          <div className="card-body">
            <h2 className="mb-4">Add Food Item</h2>
            <form onSubmit={onSubmitHandler}>
              {/* Name */}
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  required
                  name="name"
                  value={data.name}
                  onChange={onChangeHandler}
                />
              </div>

              {/* Image Upload */}
              <div className="mb-3">
                <label className="form-label">Image</label>
                <div
                  className="d-flex align-items-center gap-2 border p-2 rounded"
                  style={{ cursor: 'pointer', width: 'fit-content' }}
                  onClick={handleImageClick}
                >
                  <img
                    src={image ? URL.createObjectURL(image) : assets.upload}
                    alt="Upload"
                    width={40}
                    height={40}
                    style={{ objectFit: 'cover', borderRadius: '4px' }}
                  />
                  <span className="text-muted">Click to upload image</span>
                </div>
                <input
                  type="file"
                  className="form-control"
                  id="image"
                  name="image"
                  required
                  hidden
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </div>

              {/* Description */}
              <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  required
                  name="description"
                  value={data.description}
                  onChange={onChangeHandler}
                />
              </div>

              {/* Category */}
              <div className="mb-3">
                <label htmlFor="category" className="form-label">Category</label>
                <select
                  className="form-control"
                  id="category"
                  required
                  name="category"
                  value={data.category}
                  onChange={onChangeHandler}
                >
                  <option value="nonveg">Non Veg</option>
                  <option value="veg">Veg</option>
                  <option value="fish">Fish</option>
                  <option value="snacks">Snacks</option>
                  <option value="refreshments">Refreshments</option>
                </select>
              </div>

              {/* Price */}
              <div className="mb-3">
                <label htmlFor="price" className="form-label">Price</label>
                <input
                  type="number"
                  className="form-control"
                  id="price"
                  required
                  name="price"
                  value={data.price}
                  onChange={onChangeHandler}
                />
              </div>

              <button type="submit" className="btn btn-primary">Save</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Addfood;