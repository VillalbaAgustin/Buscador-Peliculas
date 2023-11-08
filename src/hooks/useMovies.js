import { useState } from "react";
import { searchMovies } from "../services/movies.js";

export const useMovies = (search) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getMovies = async (search) => {
    try {
      setLoading(true);
      setError(null);
      const newMovies = await searchMovies({ search });
      setMovies(newMovies);
    } catch (error) {
      setError(error.message);
    } finally {
      //Se va a ejecutar tanto en el try como en el catch
      setLoading(false);
    }
  };

  return { movies, getMovies, loading };
};
