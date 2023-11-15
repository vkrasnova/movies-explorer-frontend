import { useEffect } from 'react';
import './ToggleButton.css';

const ToggleButton = ({ shortMovies, onClick }) => {

  useEffect(() => {
    console.log(shortMovies);
  });

  return (
    <label className="toggle">
    <input
      className="toggle__checkbox"
      type="checkbox"
      checked={shortMovies}
      onChange={onClick}
    />
    <span className="toggle__switch"></span>
    <span className="toggle__label">Короткометражки</span>
  </label>
  )
};

export default ToggleButton;
