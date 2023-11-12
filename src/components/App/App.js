import { Routes, Route, useLocation } from 'react-router-dom';

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

import ('./App.css');

const App = () => {

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

  return (
    <div className="page">

      {routesWithHeader.includes(locationPath) && <Header />}

      <main className="main-container">

        <Routes>

          <Route path="/signup" element={<Register />} />

          <Route path="/signin" element={<Login />} />

          <Route path="*" element={<NotFound />} />

          <Route path="/" element={<Main />} />

          <Route path="/profile" element={<Profile />} />

          <Route path="/movies" element={<Movies />} />

          <Route path="/saved-movies" element={<SavedMovies />} />

        </Routes>

      </main>

      {routesWithFooter.includes(locationPath) && <Footer />}

      <ScrollToTop />

    </div>
  );
}

export default App;
