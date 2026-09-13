(() => {
  const key = "u02-bitcoin-progress";
  const read = () => {
    try { return JSON.parse(localStorage.getItem(key) || "{}"); }
    catch { return {}; }
  };
  const updateProgress = () => {
    const progress = read();
    const completed = Object.values(progress).filter(Boolean).length;
    document.querySelectorAll("[data-progress-count]").forEach(el => el.textContent = `${completed}/9`);
    document.querySelectorAll("[data-progress-bar]").forEach(el => el.style.width = `${completed / 9 * 100}%`);
    document.querySelectorAll("[data-lab-id]").forEach(el => {
      el.classList.toggle("completed", Boolean(progress[el.dataset.labId]));
    });
  };
  window.BitcoinModule = { key, read, updateProgress };
  updateProgress();
})();
