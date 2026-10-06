# Fletes Benevento

Proyecto realizado para el Trabajo Práctico Final (PF.A) del Curso Inicial Front-End de la Universidad Tecnológica Nacional (UTN).

## Descripción

Fletes Benevento es una aplicación web desarrollada con React para presentar un servicio de fletes y traslados en Buenos Aires.

El proyecto fue migrado desde una versión realizada previamente con HTML y CSS hacia una aplicación basada en componentes de React.

## Tecnologías utilizadas

* React
* Vite
* JavaScript
* JSX
* CSS
* React Router
* Git y GitHub

## Funcionalidades

* Navegación entre las diferentes secciones.
* Página de inicio.
* Sección de servicios con tarjetas reutilizables.
* Galería de trabajos.
* Formulario de contacto controlado con `useState`.
* Envío del formulario manejado en React.
* Visualización de los datos del formulario en la consola del navegador.
* Posibilidad de limpiar el formulario.
* Botón "Cotizá ahora" con acceso directo a WhatsApp.

## Estructura del proyecto

```text
src/
├── assets/       → imágenes y recursos.
├── components/   → componentes reutilizables.
├── pages/        → páginas adicionales.
├── styles/       → archivos CSS.
├── App.jsx       → configuración principal y rutas.
└── main.jsx      → punto de entrada de React.
```

## Componentes principales

* Navbar
* Home
* Servicios
* Card
* Galeria
* Contacto
* Footer

## Navegación

El proyecto utiliza React Router para manejar la navegación entre las diferentes secciones:

* Inicio
* Servicios
* Galería
* Contacto

## Instalación y ejecución

Para instalar las dependencias:

```bash
npm install
```

Para iniciar el servidor de desarrollo:

```bash
npm run dev
```

Luego, abrir en el navegador la dirección indicada por Vite.

## Compilación para producción

Para generar la versión de producción:

```bash
npm run build
```

Para comprobar el código mediante Oxlint:

```bash
npm run lint
```

## Autor

Emanuel Benevento
