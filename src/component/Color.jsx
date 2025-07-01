import React, { useContext } from "react";
import { CarContext } from "../contexts/Contexts";

const Color = ({ color }) => {
  const { dataC } = useContext(CarContext);
  return (
    <>
     
        <div>{color}</div>
     
    </>
  );
};

export default Color;
