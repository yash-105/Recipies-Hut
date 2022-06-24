import React, { useState } from "react";
import "./Theme.css";

const Theme = () => {
  const [darkmode, setdarkmode] = useState(false);
  return (
    <div className={darkmode ? "dark-mode" : "light-mode"}>
      <div className="container">
        <span style={{ color: darkmode ? "grey" : "yellow" }}>*</span>
        <div className="switch-checkbox">
          <input
            type="checkbox"
            onClick={() => {
              setdarkmode(!darkmode);
            }}
          />
        </div>
        <span style={{ color: darkmode ? "#c96dfd" : "grey" }}>)</span>
          </div>
          
    </div>
  );
};

export default Theme;
