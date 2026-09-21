import "../styles/Servicios.css";

import fletesImg from "../assets/fletes3.jpg";
import paqueteriaImg from "../assets/flete.webp";
import trasladoImg from "../assets/flete2.jpg";
import Card from "./Card";
function Servicios() {
  return (
    <main className="Servicios">
      <h1>Servicios</h1>

      <p>
        Ofrecemos servicios de fletes y traslados en Buenos Aires.
      </p>

      <div className="servicios-contenedor">

        <Card
          imagen={fletesImg}
          titulo="Fletes"
          descripcion="Traslados de muebles, electrodomésticos y diferentes tipos de carga."
        />

        <Card
         imagen={paqueteriaImg}
         titulo="Paquetería"
         descripcion="Transporte de paquetes y mercadería de manera rápida y segura."
        />

        <Card
          imagen={trasladoImg}
          titulo="Traslados"
          descripcion="Realizamos traslados dentro de Buenos Aires y alrededores."
        />

      </div>
    </main>
  );
}

export default Servicios;