import React from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import Routing from './RoutingMachine';

import './home.scss';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const Home = () => {
  const center = [33.80783809837398, 35.77950633050182];

  return (
    <MapContainer
      center={center}
      zoom={8.5}
      style={{ width: '75vw', height: '70vh' }}
    >
      <TileLayer
        url={
          'https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=ekFD57sGwSTMIBBJ7Oj9'
        }
        attribution={
          '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
        }
      />
      <Routing />
    </MapContainer>
  );
};

export default React.memo(Home);
