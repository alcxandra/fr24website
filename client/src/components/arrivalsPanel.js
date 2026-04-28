import { searchInput } from "./searchInput.js";
import "./arrivalsPanel.css";

export function arrivalsPanel(onSearch) {
  //container for panel
  //for css
  const panel = document.createElement("div");
  panel.id = "arrivals-panel";
  //heading
  const title = document.createElement("h2");
  title.textContent = "ARRIVALS";

  //place holder text for input box
  const search = searchInput({
    placeholder: "Enter airport code",
    onSearch,
  });
  const results = document.createElement("div");
  results.id = "arrivals-results";

  //add features
  panel.appendChild(title);
  panel.appendChild(search);
  panel.appendChild(results);

  return { panel, results };
}
