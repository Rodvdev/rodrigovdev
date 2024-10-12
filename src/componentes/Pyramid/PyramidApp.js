import React from "react";
import "./Pyramid.css";
import Pyramid from "./Pyramid";
import NavBar from "./NavBar/NavBar";
import SideBar from "./SideBar/SideBar";
import { usePyramidContext } from "./Context/PyramidContext";

const PyramidApp = () => {
  const { showSidebar } = usePyramidContext();
  const categories = [
    {
      label: "Entrenamientos",
      level: 1,
      backgroundImageUrl: "images/entrenamientos.jpg",
      subcategories: [
        {
          label: "Fuerza",
          level: 2,
          subcategories: [
            { label: "Hombros", level: 3 },
            { label: "Espalda", level: 3 },
            { label: "Pecho", level: 3 },
            { label: "Bíceps", level: 3 },
            { label: "Tríceps", level: 3 },
            { label: "Piernas", level: 3 },
            { label: "Abdominales", level: 3 },
          ],
        },
        { label: "Estiramiento", level: 2 },
        { label: "Resistencia", level: 2 },
        { label: "Velocidad", level: 2 },
      ],
    },
    {
      label: "Recetas",
      level: 1,
      backgroundImageUrl: "images/nutricion.jpg",
      subcategories: [
        { label: "Anabólicas", level: 3 },
        { label: "Batidos", level: 3 },
        { label: "Postres", level: 3 },
      ],
    },
    { label: "Gimnasios", level: 1, backgroundImageUrl: "images/gimnasio.jpg" },
  ];

  return (
    <div className="pyramid">
      <NavBar />
      {showSidebar && <SideBar />}
      <div className="dashboard">
        <h1>FITNESS HUB</h1>
      </div>
      <Pyramid categories={categories} />
    </div>
  );
};

export default PyramidApp;
