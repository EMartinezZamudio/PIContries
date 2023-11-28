// modulos
import { Routes, Route, useLocation } from "react-router-dom";

// componentes
import Landing from "./views/Landing/Landing";

function App() {
  // hook de react-ruter
  const { pathname } = useLocation();

  const body = document.querySelector("body");
  if (pathname === "/") body.className = "bg-landing";
  if (pathname === "/home") body.className = "bg-home";

  return (
    <div>
      <h1>Nav Bar</h1>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
