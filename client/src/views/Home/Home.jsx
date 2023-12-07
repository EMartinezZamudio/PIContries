// hooks
import { useDispatch } from "react-redux";

// custom hooks
import usePaginadoCards from "../../hooks/usePaginadoCards";

// actions
import { removeCard } from "../../redux/actions";

// componentes
import Cards from "../../components/Cards/Cards";

const Home = () => {
  const { pagina, current, renderCards } = usePaginadoCards();
  const dispatch = useDispatch();

  const onClose = (id) => {
    dispatch(removeCard(id));
  };

  const handleClickAtras = () => {
    current(pagina - 1);
  };

  return (
    <>
      <Cards data={renderCards} onClose={onClose} />
      <div>
        <button onClick={handleClickAtras}>atras</button>
        <button>siguiente</button>
      </div>
    </>
  );
};

export default Home;
