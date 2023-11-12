import { NavLink } from 'react-router-dom';

import './AuthNavigation.css';

const AuthNavigation = () => {

  return (
    <nav className="auth-nav">
      <NavLink to="/signup" className="auth-nav__item">Регистрация</NavLink>
      <NavLink to="/signin" className="auth-nav__item auth-nav__item_type_btn">Войти</NavLink>
    </nav>
  );
};

export default AuthNavigation;