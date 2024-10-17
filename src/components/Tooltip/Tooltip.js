// src/components/Tooltip.js
import React from 'react';
import './Tooltip.css'; // Create a corresponding CSS file for styling

const Tooltip = ({ text, children }) => {
  return (
    <div className="tooltip-container">
      {children}
      <span className="tooltip">{text}</span>
    </div>
  );
};

export default Tooltip;