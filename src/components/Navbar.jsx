import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <header>
      <h2>Fletes Benevento</h2>

      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>

          <li>
            <Link to="/Servicios">Servicios</Link>
          </li>

          <li>
            <Link to="/Galeria">Galería</Link>
          </li>

          <li>
            <Link to="/Contacto">Contacto</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;