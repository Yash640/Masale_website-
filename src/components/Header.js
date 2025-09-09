import React from 'react';
import { useTranslation } from 'react-i18next';
const Header = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="eslint-disable-next-line">ORIGINIK</a>        
        <div className="d-flex">
          <button className="btn btn-outline-primary me-2" onClick={() => changeLanguage('en')}>English</button>
          <button className="btn btn-outline-primary" onClick={() => changeLanguage('mr')}>Marathi</button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
