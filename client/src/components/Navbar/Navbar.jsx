import Searchbar from "../Searchbar/Searchbar";
import { NavLink } from "react-router-dom";
import PATHROUTES from "../../helpers/PathRoutes.helpers";

// estilos
import {
  navbar,
  divSearchBar,
  divBtn,
  btnActive,
  btnPending,
} from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={navbar}>
      <div className={divBtn}>
        <NavLink
          className={({ isActive }) => (isActive ? btnActive : btnPending)}
          to={PATHROUTES.HOME}
        >
          Inicio
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? btnActive : btnPending)}
          to={PATHROUTES.ACTIVITIES}
        >
          Actividades
        </NavLink>
      </div>
      <div className={divSearchBar}>
        <Searchbar />
      </div>
    </nav>
  );
};

export default Navbar;
