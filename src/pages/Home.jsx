
import "../styles/Home.css";

function Home() {
  return (
    <main className="hero">
      <h1>Fletes Benevento</h1>

      <p>
        Servicio de fletes y traslados en Buenos Aires.
      </p>

     <button
  type="button"
  className="btn-cotizar"
  onClick={() => alert("EL BOTÓN FUNCIONA")}
>
  Cotizá ahora
</button>
    </main>
  );
}

export default Home;

