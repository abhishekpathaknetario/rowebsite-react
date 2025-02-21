// Star.js
import React from 'react';
import "./starrating.css"

const Star = ({ selected = false, onClick }) => (
  <span className={`star ${selected ? 'selected' : ''}`} onClick={onClick}>
    ★
  </span>
);

export default Star;
