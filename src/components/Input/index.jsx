import React from "react";
import "./Input.css";

export default function Input({ handleChange, value }) {
  return (
    <div className="input-container">
      <input
        onChange={(e) => handleChange(e)}
        type="text"
        value={value}
      ></input>
    </div>
  );
}
