import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { changeValue, fetchData } from "./store/actions/weather";
import Search from "./components/Search";
import Weather from "./components/Weather";
function App() {
  const weatherData = useSelector((state) => state.weather.data);
  const isLoading = useSelector((state) => state.weather.isLoading);
  const error = useSelector((state) => state.weather.error);
  const value = useSelector((state) => state.weather.value);
  console.log(weatherData.weather);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const handleSearch = (value) => {
    dispatch(fetchData(value));
  };
  const handleChange = (value) => {
    dispatch(changeValue(value));
  };

  return (
    <div className="App">
      {isLoading && <div>Loading...</div>}
      {error && <div>Error happened...</div>}
      <h1>Weather App</h1>
      <p>Find out the current weather situation around the world</p>
      <Search
        onSearch={() => handleSearch(value)}
        onChangeValue={handleChange}
        value={value}
      />
      {weatherData && weatherData.weather ? (
        <Weather
          name={weatherData.name}
          temp={weatherData.main?.temp}
          description={`The weather condition in ${weatherData.name} is described as: ${weatherData.weather[0].description} with a temperature of ${weatherData.main.temp} and a humidity of ${weatherData.main.humidity}`}
          main={weatherData.weather[0]?.main}
          icon={weatherData.weather[0]?.icon}
        />
      ) : (
        <div>No found country</div>
      )}
    </div>
  );
}

export default App;
