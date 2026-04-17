document.addEventListener("DOMContentLoaded", () => {
  const epochEl = document.getElementById("epoch-time");

  function updateEpoch() {
    const now = Date.now();
    epochEl.textContent = now;
    epochEl.setAttribute("datetime", new Date(now).toISOString());
  }

  updateEpoch();
  setInterval(updateEpoch, 500);
});
