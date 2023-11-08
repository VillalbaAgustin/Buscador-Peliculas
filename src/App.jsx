import "./App.css";
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks";
import { useSearch } from "./hooks/useSearch";

function App() {
  const { search, setSearch, error } = useSearch();
  const { movies, getMovies, loading } = useMovies(search);

  const handleSubmit = (e) => {
    e.preventDefault();
    getMovies(search);
  };

  const handleChange = (e) => {
    const newSearch = e.target.value;
    setSearch(newSearch);
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
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </header>

      <main>{loading ? <p>Cargando...</p> : <Movies movies={movies} />}</main>
    </div>
  );
}

export default App;
