import React, { useState } from "react";

export const Form = () => {
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ query });
  };

  const handleChange = (e) => {
    const newQuery = e.target.value;
    if (newQuery.startsWith(" ")) return;
    setQuery(newQuery);

    if (newQuery === "") {
      setError("No se puede buscar una película vacía");
      return;
    }
    if (newQuery.match(/^\d+$/)) {
      setError("No se puede buscar una película con número");
      return;
    }
    if (newQuery.length < 2) {
      setError("La búsqueda debe tener al menos 2 caracteres");
      return;
    }
    setError(null);
  };
  return (
    <section>
      <form className="form" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={query}
          name="query"
          placeholder="Avengers, Star Wars, Spiderman"
          type="text"
        />
        <button type="submit">Submit</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </section>
  );
};
