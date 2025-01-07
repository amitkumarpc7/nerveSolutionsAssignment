import React from "react";
import "../styles/StrategyCard.css";
import { GoDotFill } from "react-icons/go";

const Card = ({ name, count }) => {
  return (
    <div className="card" key={name}>
      <div className="card-strategy">
        <h3 className="title">{name}</h3>
      </div>
      <div className="card-count">
        <p>
          <GoDotFill style={{ verticalAlign: "sub", fontSize: "0.8rem" }} />
          {count}
          {count > 1 ? " Strategies" : " Strategy"}
        </p>
      </div>
    </div>
  );
};

export default Card;
