import { Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import building from "../assets/building.svg";
import { ReactComponent as Thick } from "../assets/thick.svg";

function CustomMarker({ depot }) {

  const buildingIcon = new Icon({
    iconUrl: building,
    iconSize: [45, 45],
  });

  return (
    <Marker
      position={[depot.latitude, depot.longitude]}
      icon={buildingIcon}
    >
      <Popup position={[depot.latitude, depot.longitude]}>
        <div className="text-base">
          <div className="flex flex-col mb-4">
            <span className="font-thin text-gray-200">Name</span>
            <span className="font-bold text-secondary">{depot.stationName}</span>
          </div>
          <div className="flex flex-col">
            <div className="flex mb-4">
              <div className="flex flex-col mr-5">
                <span className="font-thin text-gray-200">Is it a depot?</span>
                <span className="font-bold text-secondary">{(depot.isDepot && <Thick />) || "—"}</span>
              </div>
              <div className="flex flex-col mr-5">
                <span className="font-thin text-gray-200">Latitude</span>
                <span className="font-bold text-secondary">{depot.latitude || "—"}</span>
              </div>
              <div className="flex flex-col mr-5">
                <span className="font-thin text-gray-200">Longitude</span>
                <span className="font-bold text-secondary">{depot.longitude || "—"}</span>
              </div>
            </div>
            <span className="font-bold text-black mb-2">Refuel</span>
            <div className="flex mb-4">
              <div className="flex flex-col mr-5">
                <span className="font-thin text-black">Diesel</span>
                <span className="font-bold text-secondary">{(depot.isFuelDiesel && <Thick />) || "—"}</span>
              </div>
              <div className="flex flex-col mr-5">
                <span className="font-thin text-black">Petrol</span>
                <span className="font-bold text-secondary">{(depot.isFuelPetrol && <Thick />) || "—"}</span>
              </div>
            </div>
            <span className="font-bold text-black mb-2">Recharge</span>
            <div className="flex">
              <div className="flex flex-col mr-5">
                <span className="font-thin text-gray-200">Residential</span>
                <span className="font-bold text-secondary">{(depot.isElectricResidential && <Thick />) || "—"}</span>
              </div>
              <div className="flex flex-col mr-5">
                <span className="font-thin text-gray-200">Public</span>
                <span className="font-bold text-secondary">{(depot.isElectricPublic && <Thick />) || "—"}</span>
              </div>
              <div className="flex flex-col mr-5">
                <span className="font-thin text-gray-200">Fast</span>
                <span className="font-bold text-secondary">{(depot.isElectricFast && <Thick />) || "—"}</span>
              </div>
              <div className="flex flex-col mr-5">
                <span className="font-thin text-gray-200">Rapid</span>
                <span className="font-bold text-secondary">{(depot.isElectricRapidDC && <Thick />) || "—"}</span>
              </div>
              <div className="flex flex-col mr-5">
                <span className="font-thin text-gray-200">Bays</span>
                <span className="font-bold text-secondary">{depot.bays}</span>
              </div>
            </div>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}

export default CustomMarker;