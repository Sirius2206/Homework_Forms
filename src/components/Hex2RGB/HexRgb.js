import React, { useState } from "react";
import "./HexRgb.css";

function HexRgb() {
  const [label, setLabel] = useState("test");

  function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  }

  const handleChange = (e) => {
    const hex = e.target.value;
    if (hex.length !== 7) return;
    const rgb = hexToRgb(hex);
    if (!rgb) {
      setLabel("Ошибка!");
      return;
    }
    setLabel(`rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`);
    document.body.style.backgroundColor = hex;
  };
  
  return (
    <form className="Hex-form" onSubmit={e => e.preventDefault()}>
      <input
        id="color"
        className="Hex-input"
        type="text"
        onChange={handleChange}
      />
      <label htmlFor="color" className="Hex-label">
        {label}
      </label>
    </form>
  );
}

export default HexRgb;
