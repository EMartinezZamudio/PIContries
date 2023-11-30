import Searchbar from "../Searchbar/Searchbar";

// estilos
import { navbar, divNavbar } from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={navbar}>
      <div className={divNavbar}>
        <span>Countries</span>
      </div>
      <div className={divNavbar}>
        <Searchbar />
      </div>
    </nav>
  );
};

export default Navbar;
