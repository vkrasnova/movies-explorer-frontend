import { useLocation } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import AuthNavigation from '../AuthNavigation/AuthNavigation';
import useAuth from '../../hooks/useAuth';
import ('./Header.css');

const Header = () => {

  const { isLoggedIn } = useAuth();

  const locationPath = useLocation().pathname;

  const headerClassName = (
    `header
      ${(locationPath === '/')
        ? 'header_color_secondary'
        : ''}`
  );

  return (
    <header className={headerClassName}>

      <div className="header__container">

        <div className="header__logo">
          <Logo />
        </div>

        <div className="header__nav">

          {isLoggedIn ? <Navigation /> : <AuthNavigation />}

        </div>

      </div>

    </header>
  );
}

export default Header;
