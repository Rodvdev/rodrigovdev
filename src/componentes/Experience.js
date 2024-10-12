import React, { useState } from "react";
import "./Experience.css";

function Experience() {
  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div className="Experience">
      <h2 id="experience">Experiencia</h2>
      <p>
        Me especializo en crear sitios web con tecnología de React.js,
        Express.js, Node.js y MySQL. Mi objetivo es ofrecer soluciones digitales
        personalizadas para todo tipo de negocios, desde emprendedores que están
        empezando hasta empresas consolidadas que buscan optimizar su presencia
        online y acelerar su desarrollo.
      </p>
      {showFullText && (
        <p className="mt-2">
          Cada proyecto es único, y lo abordo con un enfoque integral:
          desarrollo backend y frontend, diseño responsive, optimización para
          motores de búsqueda (SEO), integración de sistemas de pago, y mucho
          más. Con mi experiencia, puedo ayudarte a transformar tus ideas en
          plataformas que generen valor real, ya sea a través de una tienda
          online para aumentar tus ventas, un sitio web que resalte lo mejor de
          tu marca o un software personalizado para gestionar tus negocios.
        </p>
      )}
      <button className="toggle-button" onClick={toggleText}>
        {showFullText ? "VER MENOS" : "VER MÁS"}
      </button>
    </div>
  );
}

export default Experience;
