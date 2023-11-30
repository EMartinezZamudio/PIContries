// estilos
import {
  borderInput,
  inputSearchbar,
  btnSearchbar,
} from "./Searchbar.module.css";

const Searchbar = () => {
  return (
    <div className={borderInput}>
      <ion-icon name="search-sharp"></ion-icon>
      <input type="text" placeholder="Buscar" className={inputSearchbar} />
      <button className={btnSearchbar}>
        <ion-icon name="search-circle"></ion-icon>
      </button>
    </div>
  );
};

export default Searchbar;
