import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useResize from '../../hooks/useResize';

import ('./Navigation.css');

const Navigation = () => {

  const { isScreenL } = useResize();

  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const handleOpenCloseMenu = () => {
    if (isScreenL) {
      return;
    }
    setIsMenuOpened(!isMenuOpened);
  }

  const handleOverlay = (e) => {
    if (e.target.classList.contains('navigation__container_opened')) {
      handleOpenCloseMenu();
    }
  }

  return (
    <div className="navigation" onClick={handleOverlay}>

      <div className={`navigation__container ${isMenuOpened ? "navigation__container_opened" : ""}`}>

        <nav className="navigation__main">

          <div className="navigation__links">

            {!isScreenL &&
              <NavLink to="/" className="navigation__link" onClick={handleOpenCloseMenu}>Главная</NavLink>
            }

            <NavLink to="/movies" className="navigation__link" onClick={handleOpenCloseMenu}>Фильмы</NavLink>

            <NavLink to="/saved-movies" className="navigation__link" onClick={handleOpenCloseMenu}>Сохранённые фильмы</NavLink>

          </div>

          <NavLink to="/profile" className="navigation__btn navigation__btn_type_profile" onClick={handleOpenCloseMenu}>Аккаунт</NavLink>

          <button className="navigation__close-btn" aria-label="Закрыть меню" onClick={handleOpenCloseMenu}/>

        </nav>

      </div>

      {!isScreenL &&
        <button className="navigation__burger-btn" aria-label="Открыть меню" onClick={handleOpenCloseMenu} />}

    </div>
  );
}

export default Navigation;