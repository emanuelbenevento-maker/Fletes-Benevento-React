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
        onClick={() => {
          window.location.href =
            "https://wa.me/5491167875523?text=Hola%2C%20quiero%20cotizar%20un%20flete.";
        }}
      >
        Cotizá ahora
      </button>
    </main>
  );
}

export default Home;
