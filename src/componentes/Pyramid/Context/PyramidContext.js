import React, { useState, useContext } from "react";

const PyramidContext = React.createContext();

export const usePyramidContext = () => {
  return useContext(PyramidContext);
};

const PyramidProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <PyramidContext.Provider value={{ showSidebar, setShowSidebar }}>
      {children}
    </PyramidContext.Provider>
  );
};

export { PyramidContext, PyramidProvider };
