import React from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const subProducts = {
  'dry-fruits': ["Badam", "Cashew", "Anjeer", "Berries"],
  'raw-masale': ["Turmeric", "B", "C", "D", "E", "F", "G"],
  'millets': ["A", "B", "C", "D", "E", "F", "G"],
  'healthy-snacks': ["A", "B", "C", "D", "E", "F", "G"],
  'pickles': ["A", "B", "C", "D", "E", "F", "G"],
  'homemade-masale': ["A", "B", "C", "D", "E", "F", "G"]
};

const CategoryPage = () => {
  const { categoryName } = useParams();
  const { t } = useTranslation();

  const products = subProducts[categoryName] || [];

  const formattedCategoryName = categoryName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <div className="container mt-4">
      <h2>{t(formattedCategoryName)}</h2>
      <div className="row">
        {products.length > 0 ? (
          products.map(product => (
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={product}>
              <div className="card product-card">
                <img src={`https://placehold.co/300x200?text=${product}`} className="card-img-top product-card-img" alt={t(product)} />
                <div className="card-body">
                  <h5 className="card-title">{t(product)}</h5>
                  <Link to={`/subcategory/${product.toLowerCase().replace(/ /g, '-')}`} className="animated-button"><span>{t('View Products')}</span></Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No products in this category yet.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
