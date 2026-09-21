import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Servicios from "./components/Servicios.jsx";
import Galeria from "./components/Galeria.jsx";
import Contacto from "./components/Contacto.jsx";
import Footer from "./components/Footer";


function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/Servicios" element={<Servicios />} />

        <Route path="/Galeria" element={<Galeria />} />

        <Route path="/Contacto" element={<Contacto />} />
      
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;