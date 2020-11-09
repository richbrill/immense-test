import { useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
// Importing mock data for brevity
import depotData from '../assets/mockDepot.json';

function Map() {
  return (
    <MapContainer
      className="flex-grow"
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}

export default Map;