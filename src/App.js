import Navigation from "./components/Navigation";
import Sidebar from "./components/Sidebar";
import { MapContainer, TileLayer } from "react-leaflet";
import "./assets/main.css";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Navigation />
      <div className="flex flex-1 w-full h-full">
        <Sidebar />
        <MapContainer className="flex-grow" center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </div>
    </div>
  );
}

export default App;