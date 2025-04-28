import React, { useRef } from 'react';
import { categories, assets } from '../../assets/assets';
import './Exploremenu.css';

const ExploreMenu = ({ category, setCategory }) => {
  const menuref = useRef(null);  // Using useRef for scrolling functionality

  const scrollLeft = () => {
    menuref.current.scrollBy({
      left: -200,
      behavior: 'smooth'
    });
  };

  const scrollRight = () => {
    menuref.current.scrollBy({
      left: 200,
      behavior: 'smooth'
    });
  };

  return (
    <div className="explore-menu position-relative">
      <h1 className="d-flex align-items-center justify-content-between">
        Explore Our Menu
        <div className="d-flex">
          {/* Added onClick handlers for scroll icons */}
          <i className="bi bi-arrow-left-circle scroll-icon" onClick={scrollLeft}></i>
          <i className="bi bi-arrow-right-circle scroll-icon" onClick={scrollRight}></i>
        </div>
      </h1>
      <p>Explore curated lists of dishes from top categories</p>

      {/* Added ref to enable programmatic scrolling */}
      <div className="d-flex justify-content-between gap-4 overflow-auto explore-menu-list" ref={menuref}>
        {categories.map((item, index) => (
          <div
            key={index}
            className={`text-center explore-menu-list-item ${item.category === category ? 'active' : ''}`}
            onClick={() => setCategory(item.category === category ? 'All' : item.category)}
          >
            <img
              src={assets[item.icon]}
              alt={item.category}
              className="rounded-circle"
              height={128}
              width={128}
            />
            <p className="mt-2 fw-bold">{item.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreMenu;