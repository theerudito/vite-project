import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Components/Pages/Home";
import { Login } from "./Components/Pages/Login";
import { Nosotros } from "./Components/Pages/Nosotros";
import "../src/Components/styles/style.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
