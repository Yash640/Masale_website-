import React from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const subProducts = {
  'dry-fruits': ["Badam", "Cashew", "Anjeer", "Berries"],
  'raw-masale': [],
  'millets': [],
  'healthy-snacks': [],
  'pickles': [],
  'homemade-masale': []
};

const CategoryPage = () => {
  const { categoryName } = useParams();
  const { t } = useTranslation();

  const products = subProducts[categoryName] || [];

  return (
    <div className="container mt-4">
      <h2>{t(categoryName.replace(/-/g, ' '))}</h2>
      <div className="row">
        {products.length > 0 ? (
          products.map(product => (
            <div className="col-md-4 mb-4" key={product}>
              <div className="card">
                <img src={`https://placehold.co/300x200?text=${product}`} className="card-img-top" alt={t(product)} />
                <div className="card-body">
                  <h5 className="card-title">{t(product)}</h5>
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
