import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ aboutRef, experienceRef, projectsRef }) {
  const scrollToSection = (section) => {
    switch (section) {
      case "about":
        aboutRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "experience":
        experienceRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "projects":
        projectsRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };

  return (
    <nav>
      <ul className="NavbarUl">
        <li className="NavbarLi">
          <Link to="#about" onClick={() => scrollToSection("about")}>
            ABOUT
          </Link>
        </li>
        <li className="NavbarLi">
          <Link to="#experience" onClick={() => scrollToSection("experience")}>
            EXPERIENCE
          </Link>
        </li>
        <li className="NavbarLi">
          <Link to="#projects" onClick={() => scrollToSection("projects")}>
            PROJECTS
          </Link>
        </li>
        
        <li className="NavbarLi">
          <Link to="/references">
            References
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
