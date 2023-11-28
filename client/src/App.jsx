// modulos
import { Routes, Route, useLocation } from "react-router-dom";

// componentes
import Landing from "./views/Landing/Landing";
import Navbar from "./components/Navbar/Navbar";

// estilos
import { app } from "./App.module.css";

function App() {
  // hook de react-ruter
  const { pathname } = useLocation();

  const body = document.querySelector("body");
  if (pathname === "/") body.className = "bg-landing";
  if (pathname === "/home") body.className = "bg-home";

  return (
    <div className={app}>
      {pathname !== "/" && <Navbar />}
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
