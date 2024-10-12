import "./Body.css";
import Lenguajes from "./Lenguajes/Lenguajes";

export default function Body() {
  return (
    <div className="body">
      <div className="">
        <p><a href="https://lamona.pe">La Mona</a></p>
        <p><a href="https://elchacha.pe">Pop Up Menu</a></p>
        <p><a href="http://localhost:3000/">Webo.pe</a></p>
      </div>
      <Lenguajes />
    </div>
  );
}
