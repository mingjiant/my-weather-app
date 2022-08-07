import React from "react";
import "../styles.css";
import atmosphere from "../assets/atmosphere.jpg";
import cloudy from "../assets/cloudy.jpg";
import drizzle from "../assets/drizzle.jpg";
import snow from "../assets/snow.jpg";
import sunny from "../assets/sunny.jpg";
import rain from "../assets/rain.jpg";
import thunderstorm from "../assets/thunderstorm.jpg";
import weather from "../assets/default.jpg";

class WeatherCard extends React.Component {
  spitOutCelcius = (kelvin) => {
    const celcius = Math.round(kelvin - 273.15);
    return celcius;
  };

  getWeatherIcon = (iconParameter) => {
    const icon = `https://openweathermap.org/img/wn/${iconParameter}@2x.png`;
    return <img src={icon} alt="" />;
  };

  loadImage(weatherMain) {
    switch (weatherMain) {
      case "Atmosphere":
        return atmosphere;
      case "Clear":
        return sunny;
      case "Clouds":
        return cloudy;
      case "Drizzle":
        return drizzle;
      case "Rain":
        return rain;
      case "Snow":
        return snow;
      case "Thunderstorm":
        return thunderstorm;
      default:
        return weather;
    }
  }

  render() {
    return (
      <div className="card rounded my-3 shadow-lg back-card">
        <div
          style={{
            backgroundImage: `url(${this.loadImage(
              this.props.weatherResult.weather[0].main
            )})`,
          }}
          className="background-weather"
        >
          <div className="card-top text-center my-3 top-card">
            <div className="city-name my-3">
              <p>{this.props.weatherResult.name}</p>
              <span>...</span>
            </div>
          </div>

          <div className="card-body my-5">
            <div className="card-mid row">
              <div className="col-8 text-center temp">
                <span>
                  {this.spitOutCelcius(this.props.weatherResult.main.temp)}
                  &deg;C
                </span>
              </div>
              <div className="col-4 condition-temp">
                <p className="condition">
                  {this.props.weatherResult.weather[0].description}
                </p>
                <p className="high">
                  Max:{" "}
                  {this.spitOutCelcius(this.props.weatherResult.main.temp_max)}
                  &deg;C
                </p>
                <p className="low">
                  Min:{" "}
                  {this.spitOutCelcius(this.props.weatherResult.main.temp_min)}
                  &deg;C
                </p>
              </div>
            </div>

            <div className="icon-container card shadow mx-auto">
              {this.getWeatherIcon(this.props.weatherResult.weather[0].icon)}
            </div>
            <div className="card-bottom px-5 py-4 row">
              <div className="col text-center">
                <p>
                  {this.spitOutCelcius(
                    this.props.weatherResult.main.feels_like
                  )}
                  &deg;C
                </p>
                <span>Feels Like</span>
              </div>
              <div className="col text-center">
                <p>{this.props.weatherResult.main.humidity}%</p>
                <span>Humidity</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WeatherCard;
