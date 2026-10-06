import "../styles/Servicios.css";


import fletesImg from "../assets/fletes3.jpg";
import paqueteriaImg from "../assets/flete.webp";
import trasladoImg from "../assets/flete2.jpg";
import cargaImg from "../assets/carga.jpg";
import carga2Img from "../assets/carga2.jpg";

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
  titulo="Transporte de Plantas y Fertilizantes"
  descripcion="Traslado seguro de plantas, fertilizantes y productos para viveros y jardines."
/>

  <Card
    imagen={paqueteriaImg}
    titulo="Paquetería"
    descripcion="Transporte de paquetes y mercadería de manera rápida y segura."
  />

  <Card
  imagen={trasladoImg}
  titulo="Quimicos"
  descripcion="Realizamos traslados de quimicos, electrodomésticos y pertenencias dentro de Buenos Aires y alrededores."
/>


  <Card
    imagen={cargaImg}
    titulo="Carga y descarga"
    descripcion="Servicio de carga y descarga para diferentes tipos de mercadería."
  />

  <Card
    imagen={carga2Img}
    titulo="Traslado de cargas"
    descripcion="Transportamos cargas de manera segura y responsable."
  />

</div>
    </main>
  );
}

export default Servicios;