import {
    SNOW,
    CLOUD,
    SUN,
    RAIN,
    THUNDER,
    DRIZZLE
} from '../constants/weathers';

const returnMeTheIcon = id => {
    if (id < 300) {
        return THUNDER;
    } else if (id < 400) {
        return DRIZZLE;
    } else if (id < 600) {
        return RAIN;
    } else if (id < 700) {
        return SNOW;
    } else if (id === 800) {
        return SUN;
    } else {
        return CLOUD;
    }
}

export default returnMeTheIcon;