async function loadStatus() {
  try {
    const response = await fetch("./status.json");

    if (!response.ok) throw new Error("HTTP " + response.status);

    const data = await response.json();

    document.getElementById("battery").textContent = data.battery + "%";
    document.getElementById("temperature").textContent = data.temperature + "°C";

    console.log("Loaded: battery " + data.battery + "%, temp " + data.temperature + "°C");
  } catch (error) {
    console.log("Load failed: " + error.message);
  }
}

async function saveSettings() {
  try {
    console.log("Sending POST body: " + JSON.stringify({ odr: 1660 }));

    const response = await fetch("./settings", {
      method: "POST",
      body: JSON.stringify({ odr: 1660 }),
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) throw new Error("HTTP " + response.status);
    console.log("Save succeeded.");
    
  } catch (error) {
    console.log("Save failed (expected, no server yet): " + error.message);
  }
}

document.getElementById("loadStatusBtn").addEventListener("click", loadStatus);
document.getElementById("saveSettingsBtn").addEventListener("click", saveSettings);
