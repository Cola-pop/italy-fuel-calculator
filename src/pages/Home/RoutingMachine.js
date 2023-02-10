import L from 'leaflet';
import { createControlComponent } from '@react-leaflet/core';
import 'leaflet-routing-machine';

const createRoutineMachineLayer = (props) => {
  const instance = L.Routing.control({
    waypoints: [
      L.latLng(33.91674304338663, 35.589580090668605),
      L.latLng(33.89380729640268, 35.540486789371656),
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
