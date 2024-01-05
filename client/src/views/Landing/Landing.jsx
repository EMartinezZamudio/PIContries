// modulos
import { Link } from "react-router-dom";
import { startCountries } from "../../redux/actions";

// hooks
import { useDispatch } from "react-redux";
import { useEffect } from "react";

// estilos
import { landing, btnLanding, tituloLanding } from "./Landing.module.css";

const Landing = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startCountries());
  }, [dispatch]);

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
