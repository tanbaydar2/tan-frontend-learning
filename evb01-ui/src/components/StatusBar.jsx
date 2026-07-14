import "./StatusBar.css";

function StatusBar({ status, temperature }) {
  return (
    <header className="status-bar">
      <div className="identity">
        <span className="device-name">EVB-01</span>
      </div>
      <div className="vitals">
        <span>Battery: {status !== null ? status["Battery SOC"] : "--"}%</span>
        <span>Temp: {temperature !== null ? temperature : "--"}°C</span>
        <span>FW: {status !== null ? status.version : "--"}</span>
      </div>
    </header>
  );
}

export default StatusBar;
