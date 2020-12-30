import React, { useState } from "react";

function WeatherInput() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (e) => {
    if (e.type === "click") {
      fetch(
        "http://api.openweathermap.org/data/2.5/weather?q=" +
          query +
          "&appid=f665b561afaa3be7f6dce22877daedb2&units=metric"
      )
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          console.log(result);
        })
        .catch((error) => {
          console.log("error", error);
        });
    }
  };

  return (
    <div>
      <div className="text-center">
        <label className="mt-3 ">
          <h3>Enter city Name </h3>
          <input
            class="form-control"
            type="text"
            value={query}
            placeholder="Enter Your Location..."
            onChange={(e) => setQuery(e.target.value)}
            name="city name"
            onKeyPress={search}
          />
          <input
            className="mt-3 btn btn-primary btn-lg btn-block"
            type="Submit"
            value="search"
            onClick={search}
          />
        </label>
      </div>

      {typeof weather.main != "undefined" ? (
        <div className="mt-5">
          <h1 className="h2 font-italic ">
            weather in {weather.name},{weather.sys.country} is{" "}
            {weather.main.temp} deg C with {weather.weather[0].description}
          </h1>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default WeatherInput;
