import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import SubCategoryPage from './pages/SubCategoryPage';
import ProductPage from './pages/ProductPage';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
        <Route path="/subcategory/:subCategoryName" element={<SubCategoryPage />} />
        <Route path="/product/:subCategoryName/:productType" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;
