import { Link, useLocation } from 'react-router-dom';
import { URL } from '../../utils/constants';
import { convertDurationToText } from '../../utils/functions';

import ('./MoviesCard.css');

const MoviesCard = ({ movie }) => {

  const locationPath = useLocation().pathname;

  const isBtnTypeDelete = (locationPath === '/saved-movies');

  return (
    <li className="movie">

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
          {convertDurationToText(movie.duration)}
        </span>

      </div>

    </li>
  );
}

export default MoviesCard;
