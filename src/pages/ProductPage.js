import React from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const productDetails = {
  'badam': {
    'a': { name: 'Almond Type A', description: 'This is a description for Almond Type A.' },
    'b': { name: 'Almond Type B', description: 'This is a description for Almond Type B.' },
    'c': { name: 'Almond Type C', description: 'This is a description for Almond Type C.' },
  },
  'cashew': {
    'a': { name: 'Cashew Type A', description: 'This is a description for Cashew Type A.' },
    'b': { name: 'Cashew Type B', description: 'This is a description for Cashew Type B.' },
    'c': { name: 'Cashew Type C', description: 'This is a description for Cashew Type C.' },
  },
  'anjeer': {
    'a': { name: 'Anjeer Type A', description: 'This is a description for Anjeer Type A.' },
    'b': { name: 'Anjeer Type B', description: 'This is a description for Anjeer Type B.' },
    'c': { name: 'Anjeer Type C', description: 'This is a description for Anjeer Type C.' },
  },
  'berries': {
    'a': { name: 'Berries Type A', description: 'This is a description for Berries Type A.' },
    'b': { name: 'Berries Type B', description: 'This is a description for Berries Type B.' },
    'c': { name: 'Berries Type C', description: 'This is a description for Berries Type C.' },
  },
  'turmeric': {
    'a': { name: 'Turmeric Type A', description: 'This is a description for Turmeric Type A.' },
    'b': { name: 'Turmeric Type B', description: 'This is a description for Turmeric Type B.' },
    'c': { name: 'Turmeric Type C', description: 'This is a description for Turmeric Type C.' },
  },
};

const ProductPage = () => {
  const { subCategoryName, productType } = useParams();
  const { t } = useTranslation();

  const product = productDetails[subCategoryName]?.[productType];

  return (
    <div className="container mt-4">
      {product ? (
        <div className="row">
          <div className="col-md-6">
            <img src={`https://placehold.co/600x400?text=${product.name}`} className="img-fluid" alt={t(product.name)} style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }} />
          </div>
          <div className="col-md-6">
            <h2>{t(product.name)}</h2>
            <p>{t(product.description)}</p>
          </div>
        </div>
      ) : (
        <p>Product not found.</p>
      )}
    </div>
  );
};

export default ProductPage;