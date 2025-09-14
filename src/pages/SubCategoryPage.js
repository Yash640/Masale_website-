import React from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const subProductTypes = {
  'badam': ['a', 'b', 'c'],
  'cashew': ['a', 'b', 'c'],
  'anjeer': ['a', 'b', 'c'],
  'berries': ['a', 'b', 'c'],
  'turmeric': ['a', 'b', 'c'],
};

const SubCategoryPage = () => {
  const { subCategoryName } = useParams();
  const { t } = useTranslation();

  const productTypes = subProductTypes[subCategoryName] || [];

  const formattedSubCategoryName = subCategoryName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <div className="container mt-4">
      <h2>{t(formattedSubCategoryName)}</h2>
      <div className="row">
        {productTypes.length > 0 ? (
          productTypes.map(productType => (
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={productType}>
              <div className="card product-card">
                <img src={`https://placehold.co/300x200?text=${productType}`} className="card-img-top product-card-img" alt={t(productType)} />
                <div className="card-body">
                  <h5 className="card-title">{t(productType)}</h5>
                  <Link to={`/product/${subCategoryName}/${productType.toLowerCase().replace(/ /g, '-')}`} className="animated-button"><span>{t('View Details')}</span></Link>
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

export default SubCategoryPage;