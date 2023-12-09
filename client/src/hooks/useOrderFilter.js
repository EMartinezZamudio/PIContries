import { useState } from "react";
import { useDispatch } from "react-redux";
import { orderCards } from "../redux/actions";

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
  };
  return {
    handleOrder,
  };
};

export default useOrderFilter;
