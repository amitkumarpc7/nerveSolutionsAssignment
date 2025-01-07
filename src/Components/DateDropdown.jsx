import React, { useState } from "react";
import "../styles/DateDropdown.css";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import DropDownOption from "./DropDownOption";

const DateDropdown = ({ dates, selectedDate, setSelectedDate }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setIsExpanded(false);
  };
  return (
    <div className="dropDown">
      <div className="dropDown-header">
        <h3 className="title">{selectedDate}</h3>
        {isExpanded ? (
          <FaAngleUp
            onClick={handleToggle}
            style={{ color: "var(--dropdown-blue)", cursor: "pointer" }}
          />
        ) : (
          <FaAngleDown
            onClick={handleToggle}
            style={{ color: "var(--dropdown-blue)", cursor: "pointer" }}
          />
        )}
      </div>
      {isExpanded && (
        <DropDownOption
          dates={dates}
          selectedDate={selectedDate}
          handleDateSelect={handleDateSelect}
        />
      )}
    </div>
  );
};

export default DateDropdown;
