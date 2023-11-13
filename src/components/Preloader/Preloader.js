import React from 'react';
import './Preloader.css';

const Preloader = ({ fullScreen }) => {
  return (
    <div className={`preloader ${fullScreen ? 'preloader_fullscreen' : ''}`}>
      <div className="preloader__container">
        <span className="preloader__round"></span>
      </div>
    </div>
  )
};

export default Preloader;
