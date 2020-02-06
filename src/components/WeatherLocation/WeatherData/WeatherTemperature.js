import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import{
    SNOW,
    CLOUD,
    SUN,
    RAIN,
    THUNDER,
    DRIZZLE,
} from '../../../constants/weathers';
import './styles.css';

const icons = {
    [CLOUD]: 'cloud',
    [SUN]: 'day-sunny',
    [RAIN]:'rain',
    [SNOW]:'snow',
    [THUNDER]:'day-thunderstore',
    [DRIZZLE]:'day-showers',
};
const getWeatherIcon = (weatherState) => {
    const icon = icons[weatherState];
    const iconSize ='4x';
    if(icon)
        return <WeatherIcons className="weatherIcon" name={icon} size={iconSize}></WeatherIcons>
    else
        return <WeatherIcons className="weatherIcon" name={"day-sunny"} size={iconSize}></WeatherIcons>
};
const WeatherTemperature = ({temperature, weatherState}) => (
    <div className="weatherTemperatureCont">
        {getWeatherIcon(weatherState)}
        <span className="temperature">{`${temperature}`}</span>
        <span className="temperatureType">{`ºC`}</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired ,
    weatherState: PropTypes.string.isRequired
}

export default WeatherTemperature;
