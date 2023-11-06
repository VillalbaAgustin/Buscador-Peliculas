import "./App.css";
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks";

function App() {
  const { movies } = useMovies();

  return (
    <div>
      <header>
        <h1>Buscador de películas</h1>
        <form>
          <input placeholder="Avengers, Star Wars, Spiderman" type="text" />
          <button type="submit">Submit</button>
        </form>
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  );
}

export default App;
