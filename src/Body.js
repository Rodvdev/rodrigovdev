import "./Body.css";
import RainbowText from "./RainbowText";

export default function Body() {
  return (
    <div className="body">
      <div className="name-description">
        <RainbowText text="Rodrigo Vásquez de Velasco" />
        <RainbowText text="Experto en Diseño y Desarrollo web" />
      </div>
    </div>
  );
}
