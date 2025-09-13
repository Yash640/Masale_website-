import React from 'react';
import { useTranslation } from 'react-i18next';
import './Header.css';

const Header = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand logo" href="eslint-disable-next-line">ORIGINIK</a>        
        <div className="d-flex">
          <button className="language-button me-2" onClick={() => changeLanguage('en')}>English</button>
          <button className="language-button" onClick={() => changeLanguage('mr')}>Marathi</button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
