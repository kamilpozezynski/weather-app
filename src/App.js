import React , { useState }  from 'react';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import ButtonAppBar from './components/material-ui-components/header';
import { Grid, Col, Row } from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import './App.css';
import cities from './constants/cities';

function App() {

  const [city, setCity] = useState(null);

  const handleSelectionLocation = city => {
    setCity(city);
  }
  return (
    <Grid>
      <Row>
        <ButtonAppBar></ButtonAppBar>
      </Row>
      <Row>
      <Col xs={12} md={6}>
          <LocationList 
            cities={cities} 
            onSelectedLocation={handleSelectionLocation}/>
      </Col>
      <Col xs={12} md={6}>
        <Paper elevation={4}>
          <div className={city === null? 'detailsNotExtended' : 'details'}>
          {city ? <ForecastExtended city={city}></ForecastExtended>: 'Seleccione una ciudad' }
          </div>
        </Paper>
      </Col>
      </Row>
    </Grid>
  );
}

export default App;
