// modulos
import { Link } from "react-router-dom";

// estilos
import { landing, btnLanding } from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={landing}>
      <Link to={"/home"}>
        <button className={btnLanding}>Comenzar</button>
      </Link>
    </div>
  );
};

export default Landing;
