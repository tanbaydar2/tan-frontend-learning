import useImuStream from "../hooks/useImuStream.js";

function LiveChartCard() {
  const sample = useImuStream();

  return (
    <section className="card">
      <h2 className="card__title">Live Chart</h2>
      {sample !== null && typeof sample.az === "number" ? (
        <p className="reading">
          az: {sample.az} g · t: {sample.t} µs
        </p>
      ) : (
        <p>Waiting for stream…</p>
      )}
    </section>
  );
}

export default LiveChartCard;
