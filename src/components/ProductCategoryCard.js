import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const ProductCategoryCard = ({ category, image }) => {
  const { t } = useTranslation();

  return (
    <div className="col-md-4 mb-4">
      <div className="card product-card">
        <img src={image} className="card-img-top product-card-img" alt={t(category)} />
        <div className="card-body">
          <h5 className="card-title">{t(category)}</h5>
          <Link to={`/category/${category.toLowerCase().replace(/ /g, '-')}`} className="animated-button"><span>View Products</span></Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCategoryCard;
