import "./radarPanel.css";

export function radarPanel() {
  const panel = document.createElement("div");
  panel.id = "radar-panel";

  const title = document.createElement("h2");
  title.textContent = "GLOBAL RADAR MAP";

  const chartContainer = document.createElement("div");
  chartContainer.className = "radar-chart-container";

  panel.appendChild(title);
  panel.appendChild(chartContainer);

  return { panel, chartContainer };
}
