import React, { useContext } from "react";
import { CarContext } from "../contexts/Contexts";

const Color = () => {
  const { dataC } = useContext(CarContext);
  return (
    <>
      {dataC?.map((car, index) => (
        <div key={index}>{car.color}</div>
      ))}
    </>
  );
};

export default Color;
