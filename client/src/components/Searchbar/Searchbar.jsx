// estilos
import {
  borderInput,
  inputSearchbar,
  btnSearchbar,
  wrapperSerchbar,
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
    try {
      dispatch(addCard(dataInput));
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className={wrapperSerchbar}>
      <form className={borderInput} onSubmit={handleSubmit}>
        <ion-icon name="search-sharp"></ion-icon>
        <input
          type="text"
          placeholder="Buscar"
          className={inputSearchbar}
          onChange={handleInput}
        />
        <button className={btnSearchbar}>
          <ion-icon name="search-circle"></ion-icon>
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
