import React from 'react';
import './Preloader.css';

const Preloader = ({ styleCSS }) => {
  return (
    <div className={`preloader preloader_style_${styleCSS}`}>
      <div className="preloader__container">
        <span className="preloader__round"></span>
      </div>
    </div>
  )
};

export default Preloader;
