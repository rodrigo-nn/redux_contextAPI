import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "./features/fetchCars";
import Brand from "./component/Brand";
import { CarContext } from "./contexts/Contexts";
import Color from "./component/Color";

function App() {
  const { dataC } = useContext(CarContext);
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.cars);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;
  return (
    <div style={{ width: "500px", margin: "10px", display: "flex" }}>
      <div style={{ margin: "10px" }}>
        <h2>Redux Pai</h2>
        {data?.map((car, index) => (
          <div key={index}>{car.name}</div>
        ))}
      </div>
      <div style={{ margin: "10px" }}>
        <h2>Redux Filho</h2>
        <Brand />
      </div>
      <div style={{ margin: "10px" }}>
        <h2>ContextAPI</h2>
        {dataC?.map((car, index) => (
          <div key={index}>{car.year}</div>
        ))}
      </div>
      <div style={{ margin: "10px" }}>
        <h2>ContextAPI Filho</h2>
        <Color />
      </div>
    </div>
  );
}

export default App;
