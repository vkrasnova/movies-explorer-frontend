import { Link, useLocation } from 'react-router-dom';
import { URL } from '../../utils/constants';

import ('./MoviesCard.css');

const MoviesCard = ({ movie }) => {

  const locationPath = useLocation().pathname;

  const isBtnTypeDelete = (locationPath === '/saved-movies');

  const movieDurationText = (minutes) => {
    const movieDurationHours = Math.floor(minutes/60);
    const movieDurationMinutes = minutes % 60;
    return `${movieDurationHours} ч. ${movieDurationMinutes} мин.`;
  }

  return (
    <div className="movie">

      <Link to={movie.trailerLink} className="movie__image-container" target="_blank" rel="noopener noreferrer">
        <img
          className="movie__image"
          src={`${URL.MOVIES}${movie.image.url}`}
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
          {movieDurationText(movie.duration)}
        </span>

      </div>

    </div>
  );
}

export default MoviesCard;
