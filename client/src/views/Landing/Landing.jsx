// modulos
import { Link } from "react-router-dom";

// estilos
import { landing, btnLanding, tituloLanding } from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={landing}>
      <p className={tituloLanding}>P.I. Countries</p>
      <Link to={"/home"}>
        <button className={btnLanding}>Comenzar</button>
      </Link>
    </div>
  );
};

export default Landing;
