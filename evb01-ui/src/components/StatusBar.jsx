import "./StatusBar.css";

function StatusBar() {
  return (
    <header className="status-bar">
      <div className="identity">
        <span className="device-name">EVB-01</span>
      </div>
      <div className="vitals">
        <span>Battery: --%</span>
        <span>Temp: --°C</span>
        <span>FW: --</span>
      </div>
    </header>
  );
}

export default StatusBar;
