
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/menu.png";

function Navbar() {
  return (
    <header className="header-principal">

      <Link to="/" className="logo">
        <img
          src={logo}
          className="logo-img"
          alt="Logo Fletes Benevento"
        />
      </Link>

      <h2 className="logo-text">Benevento</h2>

      <nav className="menu">
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

      <div className="cotizacion">

        <span className="btn-cotizar">
          Cotizá ahora
        </span>

        <a
          href="https://wa.me/5491167875523?text=Hola%2C%20quiero%20cotizar%20un%20flete."
          target="_blank"
          rel="noreferrer"
          className="whatsapp"
        >
          <i className="fa-brands fa-whatsapp"></i>
        </a>

      </div>

    </header>
  );
}

export default Navbar;
