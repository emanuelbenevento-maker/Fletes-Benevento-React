function Card({ imagen, titulo, descripcion }) {
  return (
    <div className="servicio">

      <img src={imagen} alt={titulo} />

      <h2>{titulo}</h2>

      <p>{descripcion}</p>

      <a
        className="btn-cotizar"
        href="https://wa.me/5491167875523?text=Hola%2C%20quiero%20cotizar%20un%20flete."
        target="_blank"
        rel="noopener noreferrer"
      >
        Cotizá ahora
      </a>

    </div>
  );
}

export default Card;