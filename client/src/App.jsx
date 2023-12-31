// modulos
import { Routes, Route, useLocation } from "react-router-dom";
import PATHROUTES from "./helpers/PathRoutes.helpers";

// componentes
import Landing from "./views/Landing/Landing";
import Navbar from "./components/Navbar/Navbar";
import Home from "./views/Home/Home";
import Detail from "./views/Detail/Detail";
import Activities from "./components/Activities/Activities";
import Form from "./components/Form/Form";

// estilos
import { app } from "./App.module.css";

function App() {
  const { pathname } = useLocation();

  const body = document.querySelector("body");
  if (pathname === "/") body.className = "bg-landing";
  if (pathname === "/home") body.className = "bg-home";
  if (pathname === "/activities") body.className = "bg-activity";

  return (
    <div className={app}>
      {pathname !== "/" && <Navbar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path={PATHROUTES.HOME} element={<Home />} />
        <Route path={PATHROUTES.DETAIL} element={<Detail />} />
        <Route path={PATHROUTES.ACTIVITIES} element={<Activities />} />
        <Route path={PATHROUTES.FORM} element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
