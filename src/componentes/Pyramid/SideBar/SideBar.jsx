import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDumbbell,
  faEdit,
  faPlus,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const SideBar = () => {
  return (
    <div className="sideBar">
      <ul>
        <li>
          <FontAwesomeIcon icon={faEdit} /> Editar tarjetas
        </li>

        <li className="center-button">
          <FontAwesomeIcon icon={faPlus} /> Agregar tarjeta
        </li>
        <div className="bottom">
          <li>
            <FontAwesomeIcon icon={faUser} /> <h3>Mi Perfil</h3>
          </li>
          <li>
            <FontAwesomeIcon icon={faDumbbell} /> <h3>Entrenar</h3>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default SideBar;
