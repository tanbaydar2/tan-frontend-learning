import "./Dashboard.css";
import SensorConfigCard from "./SensorConfigCard.jsx";
import DataCollectionCard from "./DataCollectionCard.jsx";
import StatusCard from "./StatusCard.jsx";
import LiveChartCard from "./LiveChartCard.jsx";

function Dashboard({ status, temperature }) {
  return (
    <main className="dashboard">
      <SensorConfigCard />
      <DataCollectionCard />
      <StatusCard status={status} temperature={temperature} />
      <LiveChartCard />
    </main>
  );
}

export default Dashboard;
