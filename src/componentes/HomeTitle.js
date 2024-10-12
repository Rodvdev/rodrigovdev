import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import "./HomeTitle.css";

function HomeTitle() {
  return (
    <div className="HomeTitle">
      <h1>Rodrigo Vásquez de Velasco</h1>
      <div className="social-icons">
        <a
          href="https://www.linkedin.com/in/rodrigo-vasquez-de-velasco/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon style={{cursor: "pointer"}} icon={faLinkedin} />
        </a>
        <a
          href="https://www.instagram.com/guetovdv/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon style={{cursor: "pointer"}} icon={faInstagram} />
        </a>
        <a
          href="https://github.com/rodrigovdv01"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon style={{cursor: "pointer"}} icon={faGithub} />
        </a>
        <a
          href="https://www.tiktok.com/@guetovdv?_t=8qONHtFuF77&_r=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon style={{cursor: "pointer"}} icon={faTiktok} />
        </a>
      </div>
      <h2>Full Stack Developer</h2>
      <img src="/logo-vdv.png" alt="Logo VDV" className="logo" />
    </div>
  );
}

export default HomeTitle;
