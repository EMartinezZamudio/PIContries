// hooks
import { useDispatch } from "react-redux";

// custom hooks
import usePaginadoCards from "../../hooks/usePaginadoCards";

// actions
import { removeCard } from "../../redux/actions";

// componentes
import Cards from "../../components/Cards/Cards";

const Home = () => {
  const { current, renderCards } = usePaginadoCards();
  const dispatch = useDispatch();

  const onClose = (id) => {
    dispatch(removeCard(id));
  };

  return (
    <>
      <Cards data={renderCards} onClose={onClose} />
      <div>
        <button>regreso</button>
        <button>siguiente</button>
      </div>
    </>
  );
};

export default Home;
