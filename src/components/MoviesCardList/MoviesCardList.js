import MoviesCard from '../MoviesCard/MoviesCard';
import sampleMovies from './sampleMovies';

import ('./MoviesCardList.css');

const MoviesCardList = () => {

  return (
    <section className="movies">
      <div className="movies__container">
        <ul className="movies__list">

            {sampleMovies.map((item) => {
              return (
                <li>
                  <MoviesCard
                  key={item._id}
                  movie={item}
                  // onCardLike={onCardLike}
                  // onCardDelete={onCardDelete}
                  />
                </li>
              )
            })}

          </ul>

        <button className="movies__more-btn">Ещё</button>

      </div>
    </section>
  );
}

export default MoviesCardList;