import { URL } from '../utils/constants';

export const unifyMoviesData = (movies) => {
  return movies.map((item) => {
    return {
      movieID: item.id,
      nameRU: item.nameRU,
      nameEN: item.nameEN,
      description: item.description,
      thumbnail: `${URL.MOVIES}${item.image.formats.thumbnail.url}`,
      image: `${URL.MOVIES}${item.image.url}`,
      trailerLink: item.trailerLink,
      year: item.year,
      country: item.country,
      director: item.director,
      duration: item.duration,
    }});
}

export const convertDurationToText = (duration) => {
  const hours = Math.floor(duration/60);
  const minutes = duration % 60;
  return `${(hours !== 0) ? hours + ' ч. ' : ''}${minutes} мин.`;
};

export const filterMoviesByName = (movies, searchQuery) => {
  return movies.filter(
    (movie) => 
      movie.nameRU.toLowerCase().includes(searchQuery)
      ||
      movie.nameEN.toLowerCase().includes(searchQuery)
  );
};

export const filterMoviesByDuration = (movies) => {
  return movies.filter(
    (movie) => 
      movie.duration <= 40
  );
};