import React, { useEffect, useState } from "react";
import HomeTitle from "./HomeTitle";
import Navbar from "./Navbar";

function HomeLeft({ aboutRef, experienceRef, projectsRef }) {

  return (
    <div className="HomeLeft">
      <HomeTitle />
        <Navbar 
          aboutRef={aboutRef} 
          experienceRef={experienceRef} 
          projectsRef={projectsRef} 
        />
    </div>
  );
}

export default HomeLeft;
