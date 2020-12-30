import React from "react";
import Calander from "./components/Calander";
import Timer from "./components/Timer";

import WeatherInput from "./components/WeatherInput";

function App() {
  return (
    <div className="container mt-5">
      <Timer />
      <Calander />
      <WeatherInput />
    </div>
  );
}

export default App;
