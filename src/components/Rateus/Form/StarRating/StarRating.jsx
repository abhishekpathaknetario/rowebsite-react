/* eslint-disable react/prop-types */
// StarRating.js
import React, { useState, useEffect } from "react";
import Star from "./Star";
import "./starrating.css";

const StarRating = ({ onRateChange }) => {
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const savedRating = localStorage.getItem("rating");
    if (savedRating) {
      setRating(parseInt(savedRating));
    }
  }, []);

  const handleClick = (value) => {
    console.log(value);
    setRating(value);
    onRateChange(value);
  };

  return (
    <div className="star-rating">
      {[5, 4, 3, 2, 1].map((value) => (
        <Star
          key={value}
          selected={value <= rating}
          onClick={() => handleClick(value)}
        />
      ))}
    </div>
  );
};

export default StarRating;
