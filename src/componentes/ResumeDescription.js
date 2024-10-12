import React, { useState } from "react";
import "./ResumeDescription.css";

function ResumeDescription() {
  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div className="ResumeDescription">
      <h2 id="experience">Sobre mí</h2>
      <p>
        ¡Hola! Soy Rodrigo Vásquez de Velasco y tengo 4 años de experiencia
        desarrollando software, mi misión es impulsar los proyectos de quienes
        me rodean y construir relaciones significativas con personas que, al
        igual que yo, buscan alcanzar su máximo potencial. Me gusta vivir
        desarrollando nuevas ideas y creando nuevas experiencias, ya sea
        explorando lugares, haciendo deportes, aprendiendo a tocar nuevos
        instrumentos, implementando nuevas recetas o enfrentando desafíos que me
        permitan crecer y evolucionar.
      </p>
      {showFullText && (
        <>
          <p className="mt-2">
            Con mi experiencia en desarrollo web te puedo ayudar a aprender
            sobre tecnología para impulsar tus actividades y formar una nueva
            evolución. Con la idea de crear conexiones auténticas y ayudar a
            otros a impulsar sus proyectos, llevo conocimientos y simplicidad a
            la vida de todos.
          </p>
        </>
      )}
      <button className="toggle-button" onClick={toggleText}>
        {showFullText ? "VER MENOS" : "VER MÁS"}
      </button>
    </div>
  );
}

export default ResumeDescription;
