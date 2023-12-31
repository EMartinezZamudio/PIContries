import { Link } from "react-router-dom";
import PATHROUTES from "../../helpers/PathRoutes.helpers";

const Activities = () => {
  return (
    <section>
      <Link to={PATHROUTES.FORM}>
        <button>Crear</button>
      </Link>
    </section>
  );
};

export default Activities;
