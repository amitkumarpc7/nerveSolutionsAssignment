import React, { useState } from "react";
import { dateArray, strategyArray } from "./data";
import Toggle from "./Components/Toggle";
import DateDropdown from "./Components/DateDropdown";
import StrategyCard from "./Components/StrategyCard";

const App = () => {
  const views = strategyArray.map((strategy) => strategy.View);
  const [selectedView, setSelectedView] = useState(views[0]);
  const [selectedDate, setSelectedDate] = useState(dateArray[0]);

  const currentStrategies =
    strategyArray.find((strategy) => strategy.View === selectedView)?.Value[
      selectedDate
    ] || [];

  console.log(selectedView);
  console.log(selectedDate);
  return (
    <div className="app">
      <Toggle views={views} view={selectedView} setView={setSelectedView} />
      <DateDropdown
        dates={dateArray}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <StrategyCard
        currentStrategies={currentStrategies}
        selectedDate={selectedDate}
      />
    </div>
  );
};

export default App;
