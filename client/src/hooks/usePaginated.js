import { useDispatch, useSelector } from "react-redux";
import { nextPage, previousPage } from "../redux/actions";

const usePaginated = () => {
  const renderCards = useSelector((state) => state.currentCards);
  const numPages = useSelector((state) => state.page);
  const currentPage = useSelector((state) => state.currentPage);
  const dispatch = useDispatch();

  const handleClickNext = () => {
    dispatch(nextPage());
  };

  const handleClickPrevious = () => {
    dispatch(previousPage());
  };
  return {
    numPages,
    currentPage,
    renderCards,
    handleClickNext,
    handleClickPrevious,
  };
};

export default usePaginated;
