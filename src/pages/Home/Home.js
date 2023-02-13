import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';

import InputSection from '../../components/InputSection/InputSection';
import MapSection from '../../components/MapSection/MapSection';
import './home.scss';

import getFuelPricesAPI from '../../api/fuel/getFuelPrices';

const Home = () => {
  const [lastClick, setLastClick] = useState();
  const [prices, setPrices] = useState({});
  const [coordinates, setCoordinates] = useState([]);

  useEffect(() => {
    getPricesData();
  }, []);

  const getPricesData = async () => {
    try {
      const pricesData = await getFuelPricesAPI();
      setPrices(pricesData.data.prices);
    } catch (error) {
      console.log(error);
    }
  };

  const onMapClickHandler = (newCoords) => {
    setLastClick(newCoords);
    // console.log(newCoords);
  };

  const onCalculateClickHandler = (newCoordinates) => {
    // console.log(coordinates);
    setCoordinates([...newCoordinates]);
  };

  return (
    <div className='home-container'>
      <Grid container spacing={2} direction='row' justifyContent='flex-start'>
        <InputSection
          coords={lastClick}
          onCalculateClick={onCalculateClickHandler}
        />
        <MapSection onMapClick={onMapClickHandler} coordinates={coordinates} />
      </Grid>
    </div>
  );
};

export default React.memo(Home);
