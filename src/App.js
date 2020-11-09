import Navigation from "./components/Navigation";
import Sidebar from "./components/Sidebar";
import Map from "./components/Map";
import "./assets/main.css";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Navigation />
      <div className="flex flex-1 w-full h-full">
        <Sidebar />
        <Map />
      </div>
    </div>
  );
}

export default App;