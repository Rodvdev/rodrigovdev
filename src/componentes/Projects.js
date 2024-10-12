import React, { useEffect, useState } from "react";
import "./Projects.css";

function RedbullCountDown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24) + 10,
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown-container">
      <h4>EMPIEZA EN</h4>
      <div className="countdown">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="time-box">
            <span className="time-value">{String(value).padStart(2, "0")}</span>
            <span className="time-label">{unit.toUpperCase()}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Projects() {
  const projectsData = [
    {
      name: "Webosoft",
      url: "https://webosoft.netlify.app",
      description: "Software para gestionar la crianza de Aves de corral.",
      image: "https://rodrigovdev.com/projects/webosoft.webp",
      technologies: ["React.js", "Express.js", "Node.js", "MySQL"],
      mobile: true,
    },
    {
      name: "Bayka",
      url: "https://bayka.pe",
      description: "Tienda Online de Accesorios y Ropa para Bicicleta.",
      image: "https://rodrigovdev.com/projects/bayka.webp",
      technologies: ["Shopify", "HTML", "CSS"],
      mobile: false,
    },
    {
      name: "Grupo Landing",
      url: "https://grupolanding.netlify.app",
      description:
        "Página web para grupo corporativo con distintas líneas de negocio.",
      image: "https://rodrigovdev.com/projects/landing.webp",
      technologies: ["React.js"],
      mobile: false,
    },
    {
      name: "La Mona",
      url: "https://lamona.pe",
      description: "Tienda Online de Accesorios Artesanales para Mujeres.",
      image: "https://rodrigovdev.com/projects/lamona.webp",
      technologies: ["React.js", "Express.js", "Node.js", "MySQL"],
      mobile: false,
    },

    {
      name: "Red Bull Carros Locos QR",
      description:
        "Desarrollé y diseñé un programa para generar invitaciones masivas en PDF automáticamente.",
      image:
        "https://rodrigovdev.com/projects/Red-Bull-Soapbox-Race_Banderole_B_Can.png",
      technologies: ["React.js"],
      mobile: false,
    },

    {
      name: "Red Bull Carros Locos - La vecindad",
      description: "Participantes del reto Red Bull Carros Locos",
      url: "https://www.redbull.com/pe-es/events/red-bull-carros-locos-peru/soapbox-teams#la-vecindad",
      image2: "https://rodrigovdev.com/projects/lavecindad.jpg",
      mobile: false,
      eventDate: "2024-11-23T00:00:00",
    },
  ];

  return (
    <div className="Projects">
      <ul>
        {projectsData.map((project, index) => (
          <li key={index}>
            <div
              className={`project-item ${project.mobile ? "mobile" : "web"}`}
            >
              {project.image && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    className="project-image"
                  />
                </a>
              )}

              <div className="project-info">
                <strong>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.name}
                  </a>
                </strong>
                <br />
                {project.description}
                {project.image2 && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <img
                      src={project.image2}
                      alt={project.name}
                      className="project-image"
                    />
                  </a>
                )}
                {project.eventDate && (
                  <RedbullCountDown targetDate={project.eventDate} />
                )}
                <br />
              </div>
            </div>

            {project.technologies && (
              <div className="tech">
                <em>Tecnología utilizada:</em>
                <div className="tag-container">
                  {project.technologies?.map((tech, techIndex) => (
                    <span key={techIndex} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
