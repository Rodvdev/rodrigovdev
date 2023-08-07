import "./Body.css";
import RainbowText from "./RainbowText";

export default function Body() {
  return (
    <div className="body">
      <div className="name-description">
        <RainbowText text="Hola, soy Rodrigo VdeV" />
        <RainbowText text="Experto en Diseño y Desarrollo Frontend" />
      </div>
    </div>
  );
}
