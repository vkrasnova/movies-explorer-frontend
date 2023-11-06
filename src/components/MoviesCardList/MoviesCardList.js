import MoviesCard from '../MoviesCard/MoviesCard';
import sampleMovies from './sampleMovies';
import useResize from '../../hooks/useResize';

import ('./MoviesCardList.css');

const MoviesCardList = () => {

  const { isScreenM, isScreenL } = useResize();

  return (
    <section className="movies">
      <div className="movies__container">
        <ul className="movies__list">

            {sampleMovies
              .slice(0, `${isScreenL ? 16 : isScreenM ? 8 : 5}`)
              .map((item) => {
                return (
                  <li>
                    <MoviesCard
                    key={item._id}
                    movie={item}
                    // onMovieSave={onMovieSave}
                    // onMovieDelete={onMovieDelete}
                    />
                  </li>
                )
              })
            }

          </ul>

        <button className="movies__more-btn">Ещё</button>

      </div>
    </section>
  );
}

export default MoviesCardList;