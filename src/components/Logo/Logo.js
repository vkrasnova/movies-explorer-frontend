import { NavLink } from "react-router-dom";
import logo from '../../images/logo.svg';

import './Logo.css';

const Logo = () => {
  return (
    <NavLink to="/" className="logo">
      <img src={logo} alt="Логотип Movies' Explorer" className="logo__image" />
    </NavLink>
  );
};

export default Logo;