import React from 'react'
import "./displayweather.css";

function DisplayWeather(props) {
console.log(props)
   const {data} = props

   const iconurl = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
  return (
    <div className='displayweather'>
        <div className='maincard'>
            <span className='cardtitle'>
                {data.name}, {data.sys.country}.Weather
            </span>
            <span className='cardsubtitle'>
                As of {new Date().toLocaleTimeString()}
            </span>
            <h1>{Math.floor(data.main.temp - 273.15)}
            <sup>o</sup>C</h1>
            <span className='weather-main'>{data.weather[0].main}</span>
            <img src = {iconurl} className='weather-icon' alt = "" />
            <span className='weather-description'>
                {data.weather[0].description}
            </span>
        </div>

        <div className='weatherdetails'>
            <div className='section1'>
                <table>
                    <tr>
                        <td>
                            <h4>High/Low: </h4>
                        </td>
                        <td>
                            <span>
                                {Math.floor(data.main.temp_max - 273.15)}<sup>o</sup>C / 
                                {Math.floor(data.main.temp_min - 273.15)}<sup>o</sup>C
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h4>Humidity: </h4>
                        </td>
                        <td>
                            <span>
                                {data.main.humidity} %
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h4>Pressure: </h4>
                        </td>
                        <td>
                            <span>
                                {data.main.pressure} mb
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h4>Wind: </h4>
                        </td>
                        <td>
                            <span>
                                {Math.floor((data.wind.speed*18)/5)} km/h
                            </span>
                        </td>
                    </tr>
                </table>
            </div>
            <div className='section2'>
                <table>
                    <tr>
                        <td>
                            <h4>Visibility: </h4>
                        </td>
                        <td>
                            <span>
                                {data.visibility/1000} km
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h4>Sunrise: </h4>
                        </td>
                        <td>
                            <span>
                                {new Date(data.sys.sunrise *1000).toLocaleTimeString()}
                            </span>
                        </td>
                    </tr>
                    <tr>
                    <td>
                            <h4>Sunset: </h4>
                        </td>
                        <td>
                            <span>
                                {new Date(data.sys.sunset *1000).toLocaleTimeString()}
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h4>Wind: </h4>
                        </td>
                        <td>
                            <span>
                                {data.wind.speed} km/h
                            </span>
                        </td>
                    </tr>
                </table>
            </div>
            <div className="weekly-forecast">
                <table>
                    {data.daily &&
                        data.daily.slice(1, 7).map((day, index) => (
                            <tr key={index}>
                                <td>
                                    <h4>
                                        {new Date(day.dt * 1000).toLocaleDateString("en-US", {
                                            weekday: "short",
                                        })}
                                        :{" "}
                                    </h4>
                                </td>
                                <td>
                                    <span>
                                        {Math.floor(day.temp.day - 273.15)}
                                        <sup>o</sup>C - {day.weather && day.weather.length > 0 ? day.weather[0].description : 'N/A'}
                                    </span>
                                </td>
                            </tr>
                        ))}
                </table>
            </div>
        </div>
    </div>
  )
}

export default DisplayWeather;
