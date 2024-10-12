import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import "./App.css";
import Guide from './componentes/Guide';

function App() {
  // useEffect(() => {
  //   const cursor = document.createElement('div');
  //   cursor.classList.add('cursor');
  //   document.body.appendChild(cursor);

  //   const moveCursor = (e) => {
  //     cursor.style.left = `${e.clientX}px`;
  //     cursor.style.top = `${e.clientY + window.scrollY}px`; // Considera el desplazamiento vertical
  //   };

  //   document.addEventListener('mousemove', moveCursor);

  //   return () => {
  //     document.removeEventListener('mousemove', moveCursor);
  //     document.body.removeChild(cursor);
  //   };
  // }, []);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/references" element={<Guide />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
