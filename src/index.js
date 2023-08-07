import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Cambiar el título y la descripción de la página
document.title = "Desarrollador Web Freelance - Creación y Diseño de Páginas Web";
document.querySelector('meta[name="description"]').setAttribute(
  "content",
  "Desarrollador web freelance especializado en la creación y diseño de páginas web. Ofrezco soluciones personalizadas para tu presencia en línea. Contáctame para proyectos de desarrollo y diseño web."
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
