import React from "react";
import axios from "axios";
import "./styles.css";
import CitySearch from "./components/CitySearch";
import WeatherCard from "./components/WeatherCard";

class App extends React.Component {
  state = { weatherResult: null };

  onSearchSubmit = async (searchInputValue) => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchInputValue}&appid=2359f7ca69a545587055f761c421f18c`
    );
    this.setState({ weatherResult: response.data });
  };

  render() {
    return (
      <div className="container my-5">
        <h1 className="text-center title">Weather Forecast</h1>
        <CitySearch onSearchSubmit={this.onSearchSubmit} />
        {this.state.weatherResult ? (
          <WeatherCard weatherResult={this.state.weatherResult} />
        ) : (
          <div className="container my-5 text-center">No result</div>
        )}
      </div>
    );
  }
}

export default App;
