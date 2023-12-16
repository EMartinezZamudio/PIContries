import Searchbar from "../Searchbar/Searchbar";
import { NavLink } from "react-router-dom";
import PATHROUTES from "../../helpers/PathRoutes.helpers";

// estilos
import { navbar, divNavbar } from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={navbar}>
      <div className={divNavbar}>
        <span>Countries</span>
        <NavLink to={PATHROUTES.FORM}>Crear Actividad</NavLink>
      </div>
      <div className={divNavbar}>
        <Searchbar />
      </div>
    </nav>
  );
};

export default Navbar;
