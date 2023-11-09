import { useEffect, useState, useRef } from "react";

export function useSearch() {
  const [search, setSearch] = useState('');
  const [error, setError] = useState(null);
  const isFirstInput = useRef(true);

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === "";
      return;
    }
    if (search === "") {
      setError("No se puede buscar una película vacía");
      return;
    }
    if (search.match(/^\d+$/)) {
      setError("No se puede buscar una película con número");
      return;
    }
    if (search.length < 2) {
      setError("La búsqueda debe tener al menos 2 caracteres");
      return;
    }
    setError(null);
  }, [search]);

  return { search, setSearch, error };
}
