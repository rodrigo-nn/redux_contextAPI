import { createContext, useEffect, useState } from "react";

export const CarContext = createContext("");

export function CarProvider({ children }) {
  const [dataC, setData] = useState(null);
  const [loadingC, setLoading] = useState(false);
  const [errorC, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(
          "https://mocki.io/v1/da2bc9c4-3cdc-48cb-8731-ab4fa6b2afad"
        );
        const json = await response.json();
        setData(json);
      } catch (error) {
        setError("Erro ao buscar dados");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <CarContext.Provider value={{ dataC, loadingC, errorC }}>
      {children}
    </CarContext.Provider>
  );
}
