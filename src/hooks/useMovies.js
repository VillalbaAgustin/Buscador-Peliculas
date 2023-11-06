import responseMovie from "../mocks/with-results.json";
import withoutMovie from "../mocks/without-result.json";

export const useMovies = () => {
  const movies = responseMovie.Search;

  // De esta forma lo controlamos nosotros y no estamos atados a los cambios de la API
  const mappedMovies = movies.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster,
  }));

  return { movies: mappedMovies };
};
