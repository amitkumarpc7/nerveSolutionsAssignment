import React from "react";
import "../styles/DateDropdown.css";

const DropDownOption = ({ dates, handleDateSelect }) => {
  return (
    <div className="dropDown-options">
      {dates.map((date) => (
        <div
          key={date}
          className="dropDown-item"
          onClick={() => handleDateSelect(date)}
        >
          {date}
        </div>
      ))}
    </div>
  );
};

export default DropDownOption;
