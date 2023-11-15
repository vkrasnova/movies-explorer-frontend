import { useCallback, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

import { mainApi } from '../../utils/Api/mainApi';
import useAuth from '../../hooks/useAuth';
import useAppContext from '../../hooks/useAppContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { STATUS_MSG } from '../../utils/constants';

import Header from '../Header/Header';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import Footer from '../Footer/Footer';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import InfoPopup from '../InfoPopup/InfoPopup';

import ('./App.css');

const App = () => {

  const { 
    setCurrentUser,
    isLoggedIn, setIsLoggedIn,
  } = useAuth();
  
  const { setInfoPopup } = useAppContext();

  const navigate = useNavigate();
  const locationPath = useLocation().pathname;

  const routesWithFooter = [
    '/',
    '/movies',
    '/saved-movies',
  ];

  const routesWithHeader = [
    '/',
    '/movies',
    '/saved-movies',
    '/profile',
  ];

  const handleRegister = ({ name, email, password }) => {

    mainApi.register({ name, email, password })
      .then(() => {
        handleLogin({ email, password });
      })
      .catch((err) => {
        setInfoPopup({
          opened: true,
          text: STATUS_MSG[err] || STATUS_MSG.ERR_SIGNUP,
          type: 'error',
        });
      });

  }

  const handleLogin = ({ email, password }) => {

    mainApi.authorize({ email, password })
      .then(({ email, name }) => {
        setIsLoggedIn(true);
        setCurrentUser({ email, name });
        navigate('/movies', {replace: true});
        setInfoPopup({
          opened: true,
          text: STATUS_MSG.OK_SIGNIN,
          type: 'ok',
        });
      })
      .catch((err) => {
        setInfoPopup({
          opened: true,
          text: STATUS_MSG[err] || STATUS_MSG.ERR_SIGNIN,
          type: 'error',
        });
      });
  }

  const handleSignOut = () => {
    mainApi.logout()
      .then(() => {
        setIsLoggedIn(false);
        setCurrentUser({});
        navigate('/', {replace: true});
      })
      .catch(() => {
        setInfoPopup({
          opened: true,
          text: STATUS_MSG.ERR_LOGOUT,
          type: 'error',
        });
      });
  }

  const checkAuth = useCallback(() => {
    mainApi.getUserInfo()
    .then((user) => {
      setIsLoggedIn(true);
      setCurrentUser(user);
    })
    .catch(() => {
      setIsLoggedIn(false);
    })
  }, [setCurrentUser, setIsLoggedIn])

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isLoggedIn === null) {
    return <></>
  }

  return (

    <div className="page">

      {routesWithHeader.includes(locationPath) && <Header />}

      <main className="main-container">

        <Routes>

          <Route path="/signup" element={<Register onRegister={handleRegister} />} />
          <Route path="/signin" element={<Login onLogin={handleLogin} />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Main />} />

          <Route element={<ProtectedRoute />}>

            <Route path="/profile" element={<Profile onSignOut={handleSignOut} />} />

            <Route path="/movies" element={<Movies />} />

            <Route path="/saved-movies" element={<SavedMovies />} />

          </Route>

        </Routes>

      </main>

      {routesWithFooter.includes(locationPath) && <Footer />}

      <ScrollToTop />

      <InfoPopup />

    </div>

  );
}

export default App;