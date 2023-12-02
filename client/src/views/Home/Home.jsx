import { useSelector } from "react-redux";
import Cards from "../../components/Cards/Cards";

const Home = () => {
  const cards = useSelector((state) => state.cards);

  return (
    <div>
      <Cards data={cards} />
    </div>
  );
};

export default Home;
