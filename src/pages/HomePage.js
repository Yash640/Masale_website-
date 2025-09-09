import React from 'react';
import ProductCategoryCard from '../components/ProductCategoryCard';
import dryFruitsImage from '../assets/dry-fruits.jpg';
import rawMasaleImage from '../assets/raw-masale.jpg';

const categories = [
  { name: "Dry Fruits", image: dryFruitsImage },
  { name: "Raw Masale", image: rawMasaleImage },
  { name: "Millets", image: `https://placehold.co/300x200?text=Millets` },
  { name: "Healthy Snacks", image: `https://placehold.co/300x200?text=Healthy+Snacks` },
  { name: "Pickles", image: `https://placehold.co/300x200?text=Pickles` },
  { name: "Homemade Masale", image: `https://placehold.co/300x200?text=Homemade+Masale` },
];

const HomePage = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        {categories.map(category => (
          <ProductCategoryCard key={category.name} category={category.name} image={category.image} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
