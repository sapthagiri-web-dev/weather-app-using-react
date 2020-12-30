import React from "react";

const handleDate = (data) => {
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let days = ["Sun", "Mon", "Tue", "wed", "Thu", "Fri", "Sat"];
  let day = days[data.getDay()];
  let date = data.getDate();
  let month = months[data.getMonth()];
  let year = data.getFullYear();

  return `${date} ${day} ${month} ${year}`;
};

function Calander() {
  return (
    <div>
      <h1 className="text-center">{handleDate(new Date())}</h1>
    </div>
  );
}

export default Calander;
