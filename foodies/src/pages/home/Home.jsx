import React, { useState } from 'react'; // Import useState from React
import Header from '../../components/header/Header';
import Explorefood from '../explorefood/Explorefood';
import ExploreMenu from '../../components/exploremenu/Exploremenu';
import FoodDisplay from '../../components/fooddisplay/Fooddisplay';

const Home = () => {
  const [category, setCategory] = useState('All');
  return (
    <main className="container">
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category } searchText={''}/> {/* Corrected prop name */}
    </main>
  );
};

export default Home;