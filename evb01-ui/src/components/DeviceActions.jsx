import "./DeviceActions.css";

function DeviceActions() {
  return (
    <footer className="device-actions">
      <button type="button">Reboot</button>
      <button type="button">Blink</button>
      <button type="button">Clear data</button>
      <button type="button">Reconfigure WiFi</button>
    </footer>
  );
}

export default DeviceActions;
