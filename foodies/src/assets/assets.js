import logo from './logo.png';
import cart from './cart.png';
import item1 from './item1.jpeg';
import item2 from './item2.jpeg';
import item3 from './item3.jpeg';
import item4 from './item4.jpeg';
import item5 from './item5.jpeg';
import item6 from './item6.jpeg';
import item7 from './item7.jpeg';
import item8 from './item8.jpeg';
import parcel from './parcel.png';
import reactIcon from './react.svg'; // Renamed to avoid conflict with 'react' import
import upload from './upload.png';
import item9 from './item9.jpeg'; // Assuming you have item9.jpeg
import item10 from './item10.jpeg'; // Assuming you have item10.jpeg
import item11 from './item11.jpeg'; // Assuming you have item11.jpeg
import item12 from './item12.jpeg'; // Assuming you have item12.jpeg

export const assets = {
  logo,
  cart,
  item1,
  item2,
  item3,
  item4,
  item5,
  item6,
  item7,
  item8,
  parcel,
  reactIcon,
  upload,
  item9,
  item10,
  item11,
  item12,
};

export const categories = [
  {
    category: 'Fish', // Corrected capitalization to match the image
    icon: 'item1', // Use the filename as the key in the assets object
    items: ['item1', 'item2', 'item3', 'item4', 'item5'],
  },
  {
    category: 'Non Veg', // Corrected capitalization to match the image
    icon: 'item6', // Use the filename as the key in the assets object
    items: ['item6', 'item7', 'item8'],
  },
  {
    category: 'Veg', // Corrected capitalization to match the image
    icon: 'item9', // Use the filename as the key in the assets object
    items: ['item9', 'item10'],
  },
  {
    category: 'Snacks', // Corrected capitalization to match the image
    icon: 'item11', // Use the filename as the key in the assets object
    items: ['item11', 'item12'],
  },
];