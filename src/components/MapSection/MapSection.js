import React, { useState } from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import Grid from '@material-ui/core/Grid';

import Routing from './RoutingMachine';
import './MapSection.scss';

const center = [33.80783809837398, 35.77950633050182];
const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapSection = (props) => {
  const { onMapClick, coordinates } = props;

  const [currentCoordClicked, setCurrentCoordClicked] = useState('');

  const CoordinatesFinder = () => {
    const map = useMapEvents({
      click(e) {
        const coordinate = `${e.latlng.lat}, ${e.latlng.lng}`;
        setCurrentCoordClicked(coordinate);
        onMapClick(coordinate);
      },
    });
    return null;
  };

  return (
    <Grid item xs={6}>
      <MapContainer center={center} zoom={8.5} style={{ height: '80vh' }}>
        <TileLayer
          url={
            'https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=ekFD57sGwSTMIBBJ7Oj9'
          }
          attribution={
            '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
          }
        />
        <CoordinatesFinder />
        {coordinates.length === 2 ? (
          <Routing key={coordinates[0]} coordinates={coordinates} />
        ) : null}
      </MapContainer>
    </Grid>
  );
};

export default MapSection;
