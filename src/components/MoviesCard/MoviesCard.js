import { Link, useLocation } from 'react-router-dom';
import { convertDurationToText } from '../../utils/functions';

import ('./MoviesCard.css');

const MoviesCard = ({ movie, isSaved, onSaveMovie, onDeleteMovie }) => {

  const locationPath = useLocation().pathname;

  const isBtnTypeDelete = (locationPath === '/saved-movies');

  const handleSaveBtnClick = () => {
    onSaveMovie(movie);
  }

  const handleDeleteBtnClick = () => {
    onDeleteMovie(movie);
  }

  return (
    <li className="movie">

      <Link to={movie.trailerLink} className="movie__image-container" target="_blank" rel="noopener noreferrer">
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
                onClick={handleDeleteBtnClick}
              />
            : <button
                className={`movie__btn movie__btn_type_save ${isSaved ? 'movie__btn_type_save_active' : ''}`}
                type="button"
                onClick={handleSaveBtnClick}
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
