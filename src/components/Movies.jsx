import React from "react";


export const Movies = ({movies}) => {

  const hasMovies = movies?.length > 1;

  return (
    <>
      {hasMovies ? (
        <ul className="movies">
          {movies.map((movie) => (
            <li className="movie" key={movie.id}>
              <h3>{movie.title}</h3>
              <p>{movie.year}</p>
              <img src={movie.poster} alt={movie.title} />
            </li>
          ))}
        </ul>
      ) : (
        <h2>Not found</h2>
      )}
    </>
  );
};
