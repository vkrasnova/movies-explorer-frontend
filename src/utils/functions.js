export const convertDurationToText = (minutes) => {
  const movieDurationHours = Math.floor(minutes/60);
  const movieDurationMinutes = minutes % 60;
  return `${movieDurationHours} ч. ${movieDurationMinutes} мин.`;
};

export const filterMoviesByName = (movies, searchQuery) => {
  return movies.filter(
    (movie) => 
      movie.nameRU.toLowerCase().includes(searchQuery)
      ||
      movie.nameEN.toLowerCase().includes(searchQuery)
  );
};

export const filterMoviesByShortDuration = (movies) => {
  return movies.filter(
    (movie) => 
      movie.duration < 41
  );
};