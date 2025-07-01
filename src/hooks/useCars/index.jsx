import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../../redux/slices/carsSlice";

export const useCars = () => {
  const state = useSelector((state) => state.cars);
  const dispatch = useDispatch();

  return {
    cars: state.cars,
    loading: state.loading,
    error: state.error,
    fetchCars: () => dispatch(fetchCars()),
  };
}
