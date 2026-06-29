// Capture control: clicking the shutter flips the "recording" state.
// JS only tracks state by toggling a class; CSS decides what that class looks like
// (.is-recording turns the shutter red instead of navy).
const shutter = document.querySelector(".shutter");

shutter.addEventListener("click", () => {
  shutter.classList.toggle("is-recording");
});

// Read the Sample rate (Hz) dropdown's current choice once, at page load.
// .value holds the chosen <option> as a string (starts at "104", the selected one).
const odr = document.querySelector("#odr");
console.log(odr.value);
