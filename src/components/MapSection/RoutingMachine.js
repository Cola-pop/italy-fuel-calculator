import L from 'leaflet';
import { createControlComponent } from '@react-leaflet/core';
import 'leaflet-routing-machine';

const createRoutineMachineLayer = (props) => {
  const { coordinates } = props;

  const x = coordinates[0].split(',');
  const y = coordinates[1].split(',');

  const instance = L.Routing.control({
    waypoints: [
      L.latLng(parseFloat(x[0]), parseFloat(x[1])),
      L.latLng(parseFloat(y[0]), parseFloat(y[1])),
    ],
    lineOptions: {
      styles: [{ color: '#FF0000', weight: 4 }],
    },
    show: false,
    addWaypoints: false,
    routeWhileDragging: true,
    draggableWaypoints: true,
    fitSelectedRoutes: true,
    showAlternatives: false,
  });

  instance.on('routesfound', function (e) {
    const routes = e.routes;
    const summary = routes[0].summary;

    console.log('Distance (km)', summary.totalDistance / 1000);
    console.log('Time (min)', Math.round((summary.totalTime % 3600) / 60));
  });

  return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;
