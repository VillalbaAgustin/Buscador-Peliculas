import { useCallback, useState } from "react";
import "./App.css";
import { Movies } from "./components/Movies";
import { useMovies, useSearch } from "./hooks";
import debounce from "just-debounce-it";

function App() {
  const [sort, setSort] = useState(false);

  const { search, setSearch, error } = useSearch();
  const { movies, getMovies, loading } = useMovies({ search, sort });

  const handleSubmit = (e) => {
    e.preventDefault();
    getMovies({ search });
  };

  const debounceGetMovies = useCallback(
    debounce((newSearch) => {
      getMovies({ search: newSearch });
    }, 300),
    []
  );

  const handleChange = (e) => {
    const newSearch = e.target.value;
    setSearch(newSearch);
    debounceGetMovies({newSearch});
  };

  const handleSort = () => {
    setSort(!sort);
  };

  return (
    <div className="page">
      <header>
        <h1>Buscador de películas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            value={search}
            name="search"
            placeholder="Avengers, Star Wars, Spiderman"
            type="text"
          />
          <button type="submit">Submit</button>
          <input type="checkbox" onChange={handleSort} checked={sort} />
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </header>

      <main>{loading ? <p>Cargando...</p> : <Movies movies={movies} />}</main>
    </div>
  );
}

export default App;
