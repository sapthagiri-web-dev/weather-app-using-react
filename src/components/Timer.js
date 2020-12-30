import React, { useState } from "react";

let userName = prompt("Please Enter Your Name");

function Timer() {
  const now = new Date().toLocaleTimeString();
  const [time, setTime] = useState(now);

  const handleTimeChange = () => {
    setTime(new Date().toLocaleTimeString());
  };

  setInterval(handleTimeChange, 1000);

  let greeting = "";
  let hours = new Date().getHours();

  if (hours < 12) {
    greeting = "Good Morning";
  } else if (hours < 18) {
    greeting = "Good Afternoon";
  } else if (hours < 21) {
    greeting = "Good Evening";
  } else {
    greeting = "Good night";
  }
  return (
    <div>
      <h1 className="display-4">
        {time} <br />
        <span className="h1 text-muted">
          {greeting}, <br></br> <span className="text-danger">{userName}</span>
        </span>
      </h1>
    </div>
  );
}

export default Timer;
