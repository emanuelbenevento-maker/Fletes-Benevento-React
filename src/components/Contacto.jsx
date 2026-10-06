import { useState } from "react";
import "../styles/Contacto.css";

function Contacto() {
  const [formulario, setFormulario] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    localidad: "",
    mensaje: "",
  });

  const manejarCambio = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const manejarEnvio = (e) => {
    e.preventDefault();

    const mensaje = `Hola, quiero hacer una consulta.

Nombre: ${formulario.nombre}
Apellido: ${formulario.apellido}
Email: ${formulario.email}
Teléfono: ${formulario.telefono}
Localidad: ${formulario.localidad}

Mensaje:
${formulario.mensaje}`;

    const mensajeWhatsApp = encodeURIComponent(mensaje);

    window.open(
      `https://wa.me/5491167875523?text=${mensajeWhatsApp}`,
      "_blank"
    );
  };

  const resetearFormulario = () => {
    setFormulario({
      nombre: "",
      apellido: "",
      email: "",
      telefono: "",
      localidad: "",
      mensaje: "",
    });
  };

  return (
    <main className="Contacto">
      <h1>Contacto</h1>

      <p>
        Completá el formulario y nos pondremos en contacto con vos.
      </p>

      <form onSubmit={manejarEnvio}>
        <label>Nombre</label>
        <input
          type="text"
          name="nombre"
          value={formulario.nombre}
          onChange={manejarCambio}
        />

        <label>Apellido</label>
        <input
          type="text"
          name="apellido"
          value={formulario.apellido}
          onChange={manejarCambio}
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formulario.email}
          onChange={manejarCambio}
        />

        <label>Teléfono</label>
        <input
          type="tel"
          name="telefono"
          value={formulario.telefono}
          onChange={manejarCambio}
        />

        <label>Localidad</label>
        <input
          type="text"
          name="localidad"
          value={formulario.localidad}
          onChange={manejarCambio}
        />

        <label>Mensaje</label>
        <textarea
          name="mensaje"
          value={formulario.mensaje}
          onChange={manejarCambio}
        ></textarea>

        <button type="submit">
          Enviar consulta
        </button>

        <button type="button" onClick={resetearFormulario}>
          Limpiar formulario
        </button>
      </form>
    </main>
  );
}

export default Contacto;