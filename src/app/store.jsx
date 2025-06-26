import { configureStore } from "@reduxjs/toolkit";
import carsReducer from "../features/fetchCars";

const store = configureStore({ reducer: { cars: carsReducer } });

export default store;
