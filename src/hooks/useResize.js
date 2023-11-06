import { useState, useEffect } from 'react';

const SCREEN_S = 360;
const SCREEN_M = 630;
const SCREEN_L = 830;
const SCREEN_XL = 1280;

const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (e) => {
      setWidth(e.target.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    width,
    isScreenS: width >= SCREEN_S,
    isScreenM: width >= SCREEN_M,
    isScreenL: width >= SCREEN_L,
    isScreenXL: width >= SCREEN_XL,
  };
};

export default useResize;