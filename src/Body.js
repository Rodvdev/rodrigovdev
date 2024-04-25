import "./Body.css";
import RainbowText from "./RainbowText";
import { Link } from "react-router-dom";

export default function Body() {
  return (
    <div className="body">
      <div className="name-description">
        <RainbowText text="Rodrigo Vásquez de Velasco" />
        <RainbowText text="desarrollador web" />
        
        <p><a href="https://elchacha.pe">"El Chácha"</a></p>
        <p><a href="https://elchacha.pe">Pop Up Menu</a></p>
        <p><a href="http://localhost:3000/">Webo.pe</a></p>
      </div>
    </div>
  );
}
