import {baseUrl , apiKey} from '../constants/api_url';

const getUrlWeatherByCity = city => {
    return `${baseUrl}?q=${city}&appid=${apiKey}`;
}

export default getUrlWeatherByCity;