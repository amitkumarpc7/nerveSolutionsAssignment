import React, { useState } from "react";
import "../styles/Toggle.css";

const Toggle = ({ views, view, setView }) => {
  const [activeTab, setactiveTab] = useState(view);

  const handleClick = (view) => {
    setactiveTab(view);
    setView(view);
  };
  return (
    <div className="toggle-header">
      {views.map((view) => (
        <button
          key={view}
          className={`tab-button ${activeTab === view ? "active" : ""}`}
          onClick={() => handleClick(view)}
        >
          {view}
        </button>
      ))}
    </div>
  );
};

export default Toggle;
