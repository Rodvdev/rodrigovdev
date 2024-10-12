import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faDumbbell,
  faList,
  faPlus,
  faTimes,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { usePyramidContext } from "../Context/PyramidContext";

const NavBar = () => {
  
  const { setShowSidebar, showSidebar } = usePyramidContext();

  return (
    <div className="navBar">
      <ul>
        <li>
          <FontAwesomeIcon icon={faUser} />
        </li>
        <li>
          <FontAwesomeIcon icon={faDumbbell} />
        </li>
        <li className="center-button">
          <FontAwesomeIcon icon={faPlus} />
        </li>
        <li>
          <FontAwesomeIcon onClick={()=> setShowSidebar(!showSidebar)} icon={!showSidebar ? faBars : faTimes} />
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
