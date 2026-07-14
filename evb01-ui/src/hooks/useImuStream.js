import { useState, useEffect } from "react";

function useImuStream() {
  const [sample, setSample] = useState(null);

  useEffect(() => {
    const ws = new WebSocket(`ws://${location.hostname}:81/`);
    ws.onmessage = (e) => setSample(JSON.parse(e.data));
    return () => ws.close();
  }, []);

  return sample;
}

export default useImuStream;
