import { MapContainer, TileLayer } from "react-leaflet";
// Importing mock data for brevity
import depotData from "../assets/mockDepot.json";
import CustomMarker from "./CustomMarker";

function Map() {
  return (
    <MapContainer
      className="flex-grow"
      center={[depotData[0].latitude, depotData[0].longitude]}
      zoom={12}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {depotData.map((depot, index) => (
        <CustomMarker depot={depot} key={`depot_${index}`} />
      ))}
    </MapContainer>
  );
}

export default Map;