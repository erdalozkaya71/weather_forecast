import React, { useState } from 'react';
import "./weather.css";
import DisplayWeather from './DisplayWeather';

function Weather() {
    const APIKEY = "7513838429762783777311fcc63687cd";

    const [form, setForm] = useState({
        city: "",
        country: ""
    });

    const [weather, setWeather] = useState(null);

    const weatherData = async (e) => {
        e.preventDefault();
        if (form.city === "") {
            alert("Add Values");
        } else {
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&cnt=5&appid=${APIKEY}`);
                if (!response.ok) {
                    throw new Error(`Weather data not available - ${response.status}`);
                }
                const data = await response.json();
                console.log("Weather Data:", data);
                setWeather(data);
            } catch (error) {
                console.error('Error fetching weather data:', error.message);
                
            }
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prevForm => ({ ...prevForm, [name]: value }));
    }

    return (
        <div className='weather'>
            <span className='title'>Weather App</span>
            <br />

            <form>
                <input type="text" name="city" placeholder="city" onChange={e => handleChange(e)} />
                <input type="text" name="country" placeholder="country" onChange={e => handleChange(e)} />
                <button className='getweather' onClick={(e) => weatherData(e)}>Submit</button>
            </form>

            {weather && (
                <div>
                    <DisplayWeather data={weather} />
                </div>
            )}
        </div>
    );
}

export default Weather;