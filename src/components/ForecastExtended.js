import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import ForecastItem from '../components/ForecastItem';
import transformForecast from '../services/transformForecast';
/*
const days = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
    'Domingo'
]

const data = {
    temperature: 14,
    humidity: 10,
    weatherState: 'normal',
    wind: '15 m/s'
}
*/
const api_key = '5be3d837c48969764307be0d2b51c864';
const url = 'https://api.openweathermap.org/data/2.5/forecast';
export default class ForecastExtended extends Component {
    constructor(){
        super();
        this.state = { forecastData: null }
    }
    componentDidMount(){
        this.updateCity(this.props.city);
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.city !== this.props.city){
            this.setState({forecastData:null})
            this.updateCity(nextProps.city)
        }
    }
    updateCity = city => {
        // fetch or axios => better for production mode.
        const url_forecast = `${url}?q=${city}&appid=${api_key}`;
        fetch(url_forecast).then(
            data=> ( data.json())
            ).then(weather_data=>{
            const forecastData = transformForecast(weather_data);
            this.setState({ forecastData })
        })
    }
    renderForecastItemsDays = (forecastData) => {
        return forecastData.map(forecast => (
             <ForecastItem
              weekDay={forecast.weekDay}
              hour={forecast.hour} 
              data={forecast.data}
              key={`${forecast.weekDay}${forecast.hour}`}></ForecastItem>));
    }
    renderProgress = () => {
        return "Cargando pronóstico extedido";
    }
    render() {
        const { city } = this.props;
        const { forecastData } = this.state; 
        return (
            <div>
                <h3>Pronóstico para: {city}</h3>
                { forecastData ?
                    this.renderForecastItemsDays(forecastData):
                    this.renderProgress()}
            </div>
        )
    }
}
ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}