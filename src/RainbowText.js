import React from 'react';
import './RainbowText.css';

const RainbowText = ({ text}) => {
  const letters = text.split('');

  return (
    <h1 className="name">
      {letters.map((letter, index) => (
        <span
          key={index}
          className="rainbow-letter"
          style={{
            '--offset': `${Math.random() * 360}deg`,
            '--hue': `${Math.random() * 360}`
          }}
        >
          {letter}
        </span>
      ))}
    </h1>
  );
};

export default RainbowText;
