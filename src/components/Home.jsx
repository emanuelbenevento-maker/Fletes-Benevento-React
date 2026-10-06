
import "../styles/Home.css";

function Home() {
  return (
    <main>

      
      <section className="hero">
        <h1>Fletes Benevento</h1>

        <p>
          Bienvenidos a la página de Traslados Benevento.
          Cotizá tu flete rápido y seguro al instante.
        </p>

      
      </section>

      
      <section className="quienes-somos">

        <div className="texto-nosotros">

          <h2>Quiénes somos</h2>

          <p>
            Fletes Benevento es una empresa en desarrollo con una trayectoria
            de 2 años. Nos dedicamos al traslado de paquetería, al servicio
            de mudanzas y embalajes con personal altamente capacitado.
          </p>

          <p>
            Nuestra mayor aspiración es mejorar constantemente en calidad y
            servicio para dar una respuesta a nuestros clientes de confianza.
            Le proponemos un traslado sin problemas y con todas las garantías.
          </p>

        </div>

      </section>

      
      <section className="ventajas">

        <h2>¿Por qué elegir Fletes Benevento?</h2>

        <div className="contenedor-ventajas">

          <div className="ventaja">
            <i className="fa-solid fa-truck-fast"></i>
            <h3>Traslados rápidos</h3>
            <p>
              Llegamos a tiempo para que no tengas demoras.
            </p>
          </div>

          <div className="ventaja">
            <i className="fa-solid fa-shield-halved"></i>
            <h3>Cuidado garantizado</h3>
            <p>
              Transportamos tus pertenencias con el mayor cuidado.
            </p>
          </div>

          <div className="ventaja">
            <i className="fa-solid fa-clock"></i>
            <h3>Puntualidad</h3>
            <p>
              Cumplimos los horarios acordados con cada cliente.
            </p>
          </div>

          <div className="ventaja">
            <i className="fa-solid fa-hand-holding-dollar"></i>
            <h3>Presupuesto sin cargo</h3>
            <p>
              Consultanos y recibí tu cotización sin compromiso.
            </p>
          </div>

        </div>

      </section>

      
      <section className="estadisticas">

        <div className="estadistica">
          <h2>2+</h2>
          <p>Años de experiencia</p>
        </div>

        <div className="estadistica">
          <h2>500+</h2>
          <p>Trabajos realizados</p>
        </div>

        <div className="estadistica">
          <h2>100%</h2>
          <p>Clientes satisfechos</p>
        </div>

        <div className="estadistica">
          <h2>24hs</h2>
          <p>Atención</p>
        </div>

      </section>

      <section className="zonas">

        <h2>
          <i className="fa-solid fa-location-dot"></i>
          Zona de cobertura
        </h2>

        <div className="contenedor-zonas">

          <div className="zona">
            <i className="fa-solid fa-map-location-dot"></i>
            <h3>Capital Federal</h3>
          </div>

          <div className="zona">
            <i className="fa-solid fa-map-location-dot"></i>
            <h3>Zona Norte</h3>
          </div>

          <div className="zona">
            <i className="fa-solid fa-map-location-dot"></i>
            <h3>Zona Sur</h3>
          </div>

          <div className="zona">
            <i className="fa-solid fa-map-location-dot"></i>
            <h3>Zona Oeste</h3>
          </div>

        </div>

      </section>

    </main>
  );
}

export default Home;

