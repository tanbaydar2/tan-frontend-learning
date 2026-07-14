import { useState, useEffect } from "react";
import StatusBar from "./components/StatusBar.jsx";
import Dashboard from "./components/Dashboard.jsx";
import DeviceActions from "./components/DeviceActions.jsx";

export default function App() {
  const [status, setStatus] = useState(null);
  const [temperature, setTemperature] = useState(null);

  useEffect(() => {
    function fetchVitals() {
      fetch("/status")
        .then((r) => r.json())
        .then(setStatus);
      fetch("/temperature")
        .then((r) => r.json())
        .then((data) => setTemperature(data.temperature));
    }

    fetchVitals();
    const id = setInterval(fetchVitals, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <StatusBar status={status} temperature={temperature} />
      <Dashboard status={status} temperature={temperature} />
      <DeviceActions />
    </>
  );
}
