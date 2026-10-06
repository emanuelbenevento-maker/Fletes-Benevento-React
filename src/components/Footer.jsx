import "../styles/Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-contenido">
        <div className="footer-info">
          <h3>Fletes Benevento</h3>

          <p>
            <i className="fa-solid fa-phone"></i>
            11 6787-5523
          </p>

          <p>
            <i className="fa-solid fa-envelope"></i>
            beneventofletes@gmail.com
          </p>

          <p>
            <i className="fa-solid fa-location-dot"></i>
            Buenos Aires, Argentina
          </p>
        </div>
      </div>

      <hr />

      <p className="copyright">
        © 2026 Fletes Benevento - Todos los derechos reservados.
      </p>
    </footer>
  );
}

export default Footer;