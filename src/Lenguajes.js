import "./Lenguajes.css";
import React_logo from "./logo.svg";
import html_logo from "./HTML5_logo.svg";
import CSS3_logo from "./CSS3_logo.svg";
import JS_logo from "./JS_logo.svg";

export default function Lenguajes() {
  return (
    <div className="lenguajes">
      <img
        src={React_logo}
        className="App-logo elemento"
        alt="REACT - Framework  JavaScript front-end"
      />
      <img
        src={html_logo}
        className="html-logo elemento"
        alt="HTML5 -Lenguaje de hipermarcado de texto"
      />
      <img
        src={CSS3_logo}
        className="css-logo elemento"
        alt="CSS3 -Estilos en cascada"
      />
      <img
        src={JS_logo}
        className="js-logo elemento"
        alt="JavaScript - Lenguaje de programación"
      />
    </div>
  );
}
