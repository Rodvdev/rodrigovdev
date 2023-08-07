import "./App.css";
import Lenguajes from "./Lenguajes";
import Body from "./Body";

function App() {
  return (
    <div className="App">
      <Body />
      <Lenguajes />
    </div>
  );
}

document.body.style.overflowY = "hidden";

// Cambiar el título y la descripción de la página
document.title = "Desarrollador Web Freelance - Creación y Diseño de Páginas Web";
document.querySelector('meta[name="description"]').setAttribute(
  "content",
  "Desarrollador web freelance especializado en la creación y diseño de páginas web. Ofrezco soluciones personalizadas para tu presencia en línea. Contáctame para proyectos de desarrollo y diseño web."
);


export default App;
