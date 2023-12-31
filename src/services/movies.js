const API_KEY = "5dc96af8";

export const searchMovies = async ({ search }) => {
  if (search === "") return null;
  try {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`
    );
    const json = await response.json();

    const movies = json?.Search;

    return movies?.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster,
    }));
  } catch (error) {
    throw new Error("Error searching movies");
  }

};

// if (search) {
//   fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
//     .then((res) => res.json())
//     .then((json) => {
//       setResponseMovies(json);
//     });
// } else {
//   setResponseMovies(withoutMovie.Error);
// }