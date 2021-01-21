import React from "react";
import "./Head.css";

function Head({ backText, frontText }) {
  return (
    <div className="component-head">
      <h2>{backText}</h2>
      <p>
        {frontText}
        <span></span>
      </p>
    </div>
  );
}

export default Head;
