// kill-switch.js
// Update OPACITY_TODAY daily. 1.0 = full, 0 = invisible.
// Suggested schedule: 1.0 → 0.8 → 0.6 → 0.4 → 0.2 → 0.0

const OPACITY_TODAY = 0.6; // <-- change this each day

document.addEventListener("DOMContentLoaded", function () {
  document.body.style.opacity = OPACITY_TODAY;
  document.body.style.transition = "opacity 1.5s ease";

  if (OPACITY_TODAY <= 0) {
    document.body.innerHTML = "";
    document.body.style.background = "#fff";
  }
});
