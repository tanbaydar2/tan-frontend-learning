function StatusCard({ status, temperature }) {
  if (status === null) {
    return (
      <section className="card">
        <h2 className="card__title">Status</h2>
        <p>Loading…</p>
      </section>
    );
  }

  return (
    <section className="card">
      <h2 className="card__title">Status</h2>
      <dl className="readout">
        <dt>Battery</dt>
        <dd>{status["Battery SOC"]}%</dd>
        <dt>Charging</dt>
        <dd>{status["Battery Charging"] ? "Yes" : "No"}</dd>
        <dt>Temperature</dt>
        <dd>{temperature !== null ? temperature : "--"}°C</dd>
        <dt>WiFi</dt>
        <dd>{status["WiFi Status"]}</dd>
        <dt>Hostname</dt>
        <dd>{status.Hostname}</dd>
      </dl>
    </section>
  );
}

export default StatusCard;
