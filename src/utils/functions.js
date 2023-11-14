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