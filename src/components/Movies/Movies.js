import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import ('./Movies.css');

function Movies() {
  return (
    <section className="movie-search" aria-label="Поиск фильмов">
      <SearchForm />
      <MoviesCardList />
    </section>
  );
}

export default Movies;
