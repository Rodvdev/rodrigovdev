import React, { useEffect, useRef, useState } from "react";
import HomeTitle from "../componentes/HomeTitle";
import Navbar from "../componentes/Navbar";
import ResumeDescription from "../componentes/ResumeDescription";
import "./Home.css";
import HomeLeft from "../componentes/HomeLeft";
import HomeRight from "../componentes/HomeRight";

function Home() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  // Función para actualizar el estado al cambiar el tamaño de la ventana

  const aboutRef = useRef();
  const experienceRef = useRef();
  const projectsRef = useRef();

  return (
    <div className="Home">
      <HomeLeft 
        aboutRef={aboutRef} 
        experienceRef={experienceRef} 
        projectsRef={projectsRef} 
      />
      <HomeRight 
        aboutRef={aboutRef} 
        experienceRef={experienceRef} 
        projectsRef={projectsRef} 
      />
    </div>
  );
}

export default Home;
