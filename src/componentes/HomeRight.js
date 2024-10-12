import React, { useEffect, useState, useRef } from "react";
import ResumeDescription from "./ResumeDescription";
import Experience from "./Experience";
import Projects from "./Projects";

function HomeRight({ aboutRef, experienceRef, projectsRef }) {


  return (
    <div className="HomeRight">
      <div ref={aboutRef}>
        <ResumeDescription />
      </div>
      <div ref={experienceRef}>
        <Experience />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
    </div>
  );
}

export default HomeRight;
