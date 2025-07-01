import { useEffect } from "react";

import Brand from "./component/Brand";
import Color from "./component/Color";
import { useCars } from "./hooks/useCars";

function App() {
  const { cars, loading, fetchCars } = useCars();

  useEffect(() => {
    fetchCars();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      {!loading ? (
      <table style={{ borderCollapse: "collapse", width: "100%", maxWidth: "800px" }}>
        <thead>
          <tr style={{ backgroundColor: "#f5f5f5" }}>
            <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left" }}>Redux Pai</th>
            <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left" }}>Redux Filho</th>
            <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left" }}>ContextAPI</th>
            <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left" }}>ContextAPI Filho</th>
          </tr>
        </thead>
        <tbody>
          {cars?.map((car, index) => (
            <tr key={car.id || index}>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {car.name}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                <Brand brand={car.company} />
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {car.year}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                <Color color={car.color} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
}

export default App;
