import React from "react";
import "../styles/StrategyCard.css";
import Card from "./Card";

const StrategyCard = ({ currentStrategies, selectedDate }) => {
  const strategyCounts = currentStrategies.reduce((acc, strategy) => {
    acc[strategy] = (acc[strategy] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="cards-container">
      {currentStrategies.length > 0 ? (
        Object.entries(strategyCounts).map(([name, count]) => (
          <Card name={name} count={count} />
        ))
      ) : (
        <div className="empty-state">
          <p>There are no strategies for</p>
          <p style={{ fontSize: "1rem", fontWeight: "600" }}>{selectedDate}</p>
        </div>
      )}
    </div>
  );
};

export default StrategyCard;
