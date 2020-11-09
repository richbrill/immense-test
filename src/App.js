import Navigation from "./components/Navigation";
import Sidebar from "./components/Sidebar";
import "./assets/main.css";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Navigation />
      <div className="flex flex-1 w-full h-full">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;