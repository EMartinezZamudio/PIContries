import useOrderFilter from "../../hooks/useOrderFilter";
import { divOrder, btnOrder } from "./OrderCountries.module.css";

const OrderCountries = () => {
  const { handleOrder } = useOrderFilter();

  return (
    <div className={divOrder}>
      <span>Orden</span>
      <div className={btnOrder}>
        <button onClick={handleOrder}>A-Z</button>
        <button onClick={handleOrder}>Poblacion</button>
      </div>
    </div>
  );
};

export default OrderCountries;
