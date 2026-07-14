import { useState, useEffect } from "react";

const ODR_OPTIONS = ["12.5", "26", "52", "104", "208", "416", "833", "1666"];
const ACCEL_RANGE_OPTIONS = ["2", "4", "8", "16"];
const GYRO_RANGE_OPTIONS = ["125", "250", "500", "1000", "2000", "4000"];

function SensorConfigCard() {
  const [odr, setOdr] = useState("");
  const [accelRange, setAccelRange] = useState("");
  const [gyroRange, setGyroRange] = useState("");
  const [duration, setDuration] = useState("");
  const [gravityComp, setGravityComp] = useState(false);
  const [saveState, setSaveState] = useState("idle");

  useEffect(() => {
    fetch("/settings")
      .then((r) => r.json())
      .then((data) => {
        setOdr(String(Number(data.odr)));
        setAccelRange(String(data.accel_range));
        setGyroRange(String(data.gyro_range));
        setDuration(String(data.duration));
        setGravityComp(data.gravity_comp);
      });
  }, []);

  function saveSetting(endpoint, value) {
    setSaveState("saving");
    fetch(`${endpoint}?value=${encodeURIComponent(value)}`, { method: "POST" })
      .then((r) => setSaveState(r.ok ? "saved" : "error"))
      .catch(() => setSaveState("error"));
  }

  function handleOdrChange(e) {
    setOdr(e.target.value);
    saveSetting("/odr", e.target.value);
  }

  function handleAccelRangeChange(e) {
    setAccelRange(e.target.value);
    saveSetting("/accel_range", e.target.value);
  }

  function handleGyroRangeChange(e) {
    setGyroRange(e.target.value);
    saveSetting("/gyro_range", e.target.value);
  }

  function handleDurationChange(e) {
    setDuration(e.target.value);
  }

  function handleDurationBlur() {
    saveSetting("/duration", duration);
  }

  function handleGravityCompChange(e) {
    setGravityComp(e.target.checked);
    saveSetting("/gravity_comp", e.target.checked ? "true" : "false");
  }

  return (
    <section className="card">
      <h2 className="card__title">Sensor Config</h2>

      <label htmlFor="odrSelect">Sample rate (ODR, Hz)</label>
      <select id="odrSelect" value={odr} onChange={handleOdrChange}>
        {ODR_OPTIONS.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <label htmlFor="accelRangeSelect">Accelerometer range (g)</label>
      <select id="accelRangeSelect" value={accelRange} onChange={handleAccelRangeChange}>
        {ACCEL_RANGE_OPTIONS.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <label htmlFor="gyroRangeSelect">Gyroscope range</label>
      <select id="gyroRangeSelect" value={gyroRange} onChange={handleGyroRangeChange}>
        {GYRO_RANGE_OPTIONS.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <label htmlFor="durationInput">Duration (s)</label>
      <input
        id="durationInput"
        type="number"
        value={duration}
        onChange={handleDurationChange}
        onBlur={handleDurationBlur}
      />

      <label htmlFor="gravityCompInput">
        <input
          id="gravityCompInput"
          type="checkbox"
          checked={gravityComp}
          onChange={handleGravityCompChange}
        />
        Gravity compensation
      </label>

      <p className="save-state">
        {saveState === "saving" && "Saving…"}
        {saveState === "saved" && "Saved"}
        {saveState === "error" && "Couldn't save"}
      </p>
    </section>
  );
}

export default SensorConfigCard;
