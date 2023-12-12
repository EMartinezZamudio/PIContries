import { useState } from "react";
import { useDispatch } from "react-redux";
import { orderCards, filterCards } from "../redux/actions";

const useOrderFilter = () => {
  const dispatch = useDispatch();
  const [btn, setBtn] = useState({
    az: true,
    poblacion: true,
  });

  const handleOrder = (action) => {
    if (action === "A-Z") {
      if (btn.az) {
        dispatch(orderCards("A-Z true"));
        setBtn({ ...btn, az: false });
      } else {
        dispatch(orderCards("A-Z false"));
        setBtn({ ...btn, az: true });
      }
    }

    if (action === "Poblacion") {
      if (btn.poblacion) {
        dispatch(orderCards("poblacion true"));
        setBtn({ ...btn, poblacion: false });
      } else {
        dispatch(orderCards("poblacion false"));
        setBtn({ ...btn, poblacion: true });
      }
    }
  };

  const handleFilter = (action) => {
    dispatch(filterCards(action));
  };
  return {
    handleOrder,
    handleFilter,
  };
};

export default useOrderFilter;
