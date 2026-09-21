function Card({ imagen, titulo, descripcion }) {
  return (
    <div className="servicio">
      <img src={imagen} alt={titulo} />
      <h2>{titulo}</h2>
      <p>{descripcion}</p>
    </div>
  );
}

export default Card;