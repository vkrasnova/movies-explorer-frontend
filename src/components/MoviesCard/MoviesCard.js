import { Link, useLocation } from 'react-router-dom';

import ('./MoviesCard.css');

const MoviesCard = ({ movie }) => {

  const locationPath = useLocation().pathname;

  const isBtnTypeDelete = (locationPath === '/saved-movies');

  return (
    <div className="movie">

      <Link to={movie.trailerlink} className="movie__image-container" target="_blank" rel="noopener noreferrer">
        <img
          className="movie__image"
          src={movie.image}
          alt={`Постер фильма '${movie.nameRU}'`}
        />
      </Link>
      
      <div className="movie__info">

        <div className="movie__main">

          <h2 className="movie__title">{movie.nameRU}</h2>

          {isBtnTypeDelete
            ? <button
                className="movie__btn movie__btn_type_delete"
                type="button"
              />
            : <button
                className="movie__btn movie__btn_type_save"
                type="button"
              />
          }

        </div>

        <span className="movie__duration">
          {movie.duration}
        </span>

      </div>

    </div>
  );
}

export default MoviesCard;
