import React from 'react';
import ProductCategoryCard from '../components/ProductCategoryCard';
import dryFruitsImage from '../assets/dry-fruits.jpg';
import rawMasaleImage from '../assets/raw-masale.jpg';
import MilletImage from '../assets/Millets.jpg';
import SnacksImage from '../assets/Healthy-snacks.jpg';
import PicklesImage from '../assets/Pickles.jpg';
import HomemadeMasaleImage from '../assets/HomemadeMasale.jpg';

const categories = [
  { name: "Dry Fruits", image: dryFruitsImage },
  { name: "Raw Masale", image: rawMasaleImage },
  { name: "Millets", image: MilletImage},
  { name: "Healthy Snacks", image: SnacksImage },
  { name: "Pickles", image: PicklesImage },
  { name: "Homemade Masale", image: HomemadeMasaleImage },
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
