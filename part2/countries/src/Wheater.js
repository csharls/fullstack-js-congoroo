import React, { useEffect } from "react"
import getWheater from "./services/weather/forecast"

const Weather = ({forecast, capital}) => {
  const {current} = forecast;
  return (
    <div>
      <h2>Wheater in {capital}</h2>
    <p><strong>temperature: {current.temperature}</strong></p>
    {current.weather_icons.map(
      icon => <img key= {icon} src={icon}></img>
    )
    }
    <p><strong>wind: {current.wind_speed}Km/h {current.wind_dir} </strong></p>

    </div>
  )
}

export default Weather