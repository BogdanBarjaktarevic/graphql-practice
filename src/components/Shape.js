import React from "react";
import "./Shape.css";

const Shape = ({ toggleHidden }) => {
  return (
    <div className="toggle-me" onClick={toggleHidden}>
      Toggle
    </div>
  );
};

export default Shape;
