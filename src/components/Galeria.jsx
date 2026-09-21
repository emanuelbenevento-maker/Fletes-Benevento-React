import fletes1 from "../assets/ema1.jpg";
import fletes2 from "../assets/ema2 (2).jpg";
import fletes3 from "../assets/ema3 (2).jpg";
import fletes4 from "../assets/ema6.jpg";
import fletes5 from "../assets/ema7.jpg";
import fletes6 from "../assets/ema8.jpg";
import fletes7 from "../assets/carga.jpg";
import fletes8 from "../assets/carga2.jpg";

import "../styles/Galeria.css";

function Galeria() {
  return (
    <main className="Galeria">
      <h1>Galería</h1>

      <p>Conocé algunos de nuestros trabajos.</p>

      <div className="galeria-contenedor">

        <img src={fletes1} alt="Trabajo de Fletes Benevento" />

        <img src={fletes2} alt="Trabajo de Fletes Benevento" />

        <img src={fletes3} alt="Trabajo de Fletes Benevento" />

        <img src={fletes4} alt="Trabajo de Fletes Benevento" />

        <img src={fletes5} alt="Trabajo de Fletes Benevento" />

        <img src={fletes6} alt="Trabajo de Fletes Benevento" />

        <img src={fletes7} alt="Trabajo de carga de Fletes Benevento" />

        <img src={fletes8} alt="Trabajo de carga de Fletes Benevento" />

      </div>
    </main>
  );
}

export default Galeria;