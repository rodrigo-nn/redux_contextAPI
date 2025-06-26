import { useSelector } from "react-redux";

const Brand = () => {
  const { data } = useSelector((state) => state.cars);
  return (
    <>
      {data?.map((car, index) => (
        <div key={index}>{car.company}</div>
      ))}
    </>
  );
};

export default Brand;
