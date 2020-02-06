import React, { Component }from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import transformWeather from '../../services/transformWeather';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import { PropTypes } from 'prop-types';
import getUrlWeatherByCity from '../../services/getUrlWeatherByCity'

class WeatherLocation extends Component {
    constructor(props){
        super(props);
        const { city } = props; 
        this.state = {
            city,
            data: null
        }
    }
    
    componentWillMount() {
        this.handleUpdateClick();
    }
    

    handleUpdateClick = () => {
        const url = getUrlWeatherByCity(this.state.city);
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                const newData = transformWeather(myJson);
                this.setState({
                    city : this.state.city,
                    data : newData
                })
            });
    };

    render(){
        const { onWeatherLocationClick } = this.props;
        const {city, data} = this.state;
        return (
            <div className="weatherLocationCont">
            <Location city={city}></Location>
            {data ? 
                <div><WeatherData data={data}></WeatherData><Button className="w-100" onClick={onWeatherLocationClick} variant="contained">Pronóstico</Button></div>: 
                <CircularProgress size={50}></CircularProgress>
            }
        </div>
        )
    }
}
WeatherLocation.propTypes = {
    city : PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func,
}
export default WeatherLocation;
