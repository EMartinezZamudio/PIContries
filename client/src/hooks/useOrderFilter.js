import { useState } from "react";
import { useDispatch } from "react-redux";
import { orderCards, filterCards } from "../redux/actions";

const useOrderFilter = () => {
  const dispatch = useDispatch();
  const [stateFilter, setStateFilter] = useState({
    continente: "",
    actividad: "",
  });
  const [btn, setBtn] = useState({
    az: true,
    poblacion: true,
  });

  const handleOrder = (event) => {
    const action = event.target.innerText;
    if (action === "A-Z") {
      if (btn.az) {
        dispatch(orderCards("A-Z true"));
        setBtn({ poblacion: true, az: false });
      } else {
        dispatch(orderCards("A-Z false"));
        setBtn({ poblacion: true, az: true });
      }
    }

    if (action === "Poblacion") {
      if (btn.poblacion) {
        dispatch(orderCards("poblacion true"));
        setBtn({ az: true, poblacion: false });
      } else {
        dispatch(orderCards("poblacion false"));
        setBtn({ az: true, poblacion: true });
      }
    }
  };

  const handleFilter = (event) => {
    const name = event.target.name;
    const action = event.target.value;
    setStateFilter({ ...stateFilter, [name]: action });
    dispatch(filterCards({ ...stateFilter, [name]: action }));
  };

  return {
    handleOrder,
    handleFilter,
  };
};

export default useOrderFilter;
