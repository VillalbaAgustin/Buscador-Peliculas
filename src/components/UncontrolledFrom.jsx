import { useState } from "react";

export const UncontrolledFrom = () => {
  // const [error, setError] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const { query, year, category } = Object.fromEntries(
      new window.FormData(e.target)
    );

    console.log({ query, year, category });
  };

  return (
    <section>
      <form className="form" onSubmit={handleSubmit}>
        <input
          name="query"
          placeholder="Avengers, Star Wars, Spiderman"
          type="text"
        />
        <input name="year" placeholder="1995" type="text" />
        <input name="category" placeholder="Acction" type="text" />
        <button type="submit">Submit</button>
      </form>
      {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
    </section>
  );
};
