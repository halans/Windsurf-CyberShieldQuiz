import React from "react";
import "../App.css";

const ProgressBar = ({ value, max }) => {
  const percent = Math.round((value / max) * 100);
  return (
    <div className="progress-bar-wrapper">
      <div className="progress-bar" style={{ width: percent + "%" }} />
      <span className="progress-label">{value} / {max}</span>
    </div>
  );
};

export default ProgressBar;
