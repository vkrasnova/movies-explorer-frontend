import { useState } from 'react';
import './ScrollToTop.css';

const ScrollToTop = () => {

  const [btnVisible, setBtnVisible] = useState(false);

  const toggleBtnVisible = () => {
    const scrolled = document.documentElement.scrollTop; 
    if (scrolled > 350){ 
      setBtnVisible(true) 
    }  
    else if (scrolled <= 350){ 
      setBtnVisible(false) 
    } 
  }

  const handleBtnClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  window.addEventListener('scroll', toggleBtnVisible);

  return (
    <button className={`scroll-to-top ${btnVisible ? "scroll-to-top_visible" : ""}`} onClick={handleBtnClick} />
  );
}

export default ScrollToTop;