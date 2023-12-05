// estilos
import {
  borderInput,
  inputSearchbar,
  btnSearchbar,
  wrapperSerchbar,
  iconoUno,
} from "./Searchbar.module.css";

// hooks
import { useState } from "react";
import { useDispatch } from "react-redux";

import { addCard } from "../../redux/actions";

const Searchbar = () => {
  const [dataInput, setDataInput] = useState("");
  const dispatch = useDispatch();

  const handleInput = (event) => {
    setDataInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (dataInput) dispatch(addCard(dataInput));
  };

  return (
    <form className={wrapperSerchbar} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Buscar"
        className={inputSearchbar}
        onChange={handleInput}
      />
      <div className={iconoUno}>
        <ion-icon name="search-sharp"></ion-icon>
      </div>
      <div className={borderInput}>
        <button className={btnSearchbar}>
          <ion-icon name="search-circle"></ion-icon>
        </button>
      </div>
    </form>
  );
};

export default Searchbar;
