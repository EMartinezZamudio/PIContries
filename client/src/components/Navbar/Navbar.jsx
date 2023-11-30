import Searchbar from "../Searchbar/Searchbar";

// estilos
import { navbar } from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={navbar}>
      <span>Navbar</span>
      <span>home</span>
      <span>activities</span>
      <Searchbar />
    </nav>
  );
};

export default Navbar;
