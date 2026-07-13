import { useState } from "react";

function StatusBar({ batteryPercent }) {
  return (
    <header>
      <span>EVB-01</span> <span>Battery: {batteryPercent}%</span>
    </header>
  );
}

function StartButton({ recording, onToggle }) {
  return <button onClick={onToggle}>{recording ? "Stop" : "Start"}</button>;
}

const ODR_OPTIONS = [12.5, 26, 52, 104, 208, 416, 833, 1666, 3333, 6666];

function SensorConfigCard() {
  const [odr, setOdr] = useState(104);
  const [accelRange, setAccelRange] = useState(2);
  const [duration, setDuration] = useState(10);
  const [recording, setRecording] = useState(false);

  return (
    <section>
      <h2>Sensor Config</h2>

      <label htmlFor="odr">Sample rate (ODR)</label>
      <select
        id="odr"
        value={odr}
        onChange={(e) => setOdr(Number(e.target.value))}
      >
        {ODR_OPTIONS.map((hz) => (
          <option key={hz} value={hz}>
            {hz} Hz
          </option>
        ))}
      </select>

      <label htmlFor="accel-range">Accel range (±g)</label>
      <select
        id="accel-range"
        value={accelRange}
        onChange={(e) => setAccelRange(Number(e.target.value))}
      >
        <option value={2}>±2g</option>
        <option value={4}>±4g</option>
        <option value={8}>±8g</option>
        <option value={16}>±16g</option>
      </select>

      <label htmlFor="duration">Duration (seconds)</label>
      <input
        id="duration"
        type="number"
        value={duration}
        onChange={(e) => setDuration(Number(e.target.value))}
      />

      <StartButton
        recording={recording}
        onToggle={() => setRecording(!recording)}
      />
    </section>
  );
}

export default function App() {
  return (
    <div>
      <StatusBar batteryPercent={87} />
      <SensorConfigCard />
    </div>
  );
}