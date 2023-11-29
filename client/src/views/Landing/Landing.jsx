// modulos
import { Link } from "react-router-dom";

// estilos
import {
  landing,
  btnLanding,
  tituloLanding,
  span1,
  span2,
} from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={landing}>
      <p className={tituloLanding}>
        <span className={span1}>P.I.</span>
        <span className={span2}>Countries</span>
      </p>
      <Link to={"/home"}>
        <button className={btnLanding}>Comenzar</button>
      </Link>
    </div>
  );
};

export default Landing;
