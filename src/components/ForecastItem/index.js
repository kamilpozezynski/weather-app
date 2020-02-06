import React from 'react'
import PropTypes from 'prop-types';
import WeatherData from './../WeatherLocation/WeatherData';
import './styles.css';

export default function ForecastItem({ weekDay, hour, data}) {
    return (
        <div className="forecastItemCont"> 
            <p>{weekDay} hora {hour}:00</p>
            <WeatherData data={data}></WeatherData>
        </div>
    )
}
ForecastItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState:PropTypes.string.isRequired,
        humidity:PropTypes.number.isRequired,
        wind:PropTypes.string.isRequired,
    })
}

