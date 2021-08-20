import React from "react";
import "./StatsItem.css";

const StatsItem = (props) => {
  return (
    <div className="stats__info">
      <span className="num">{props.num}</span>
      <span className="num__label">{props.num__label}</span>
    </div>
  );
};

export default StatsItem;
