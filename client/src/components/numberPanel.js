import { searchInput } from "./searchInput.js";
import "./numberPanel.css";

export function numberPanel(onSearch) {
  //container for panel
  //for css
  const panel = document.createElement("div");
  panel.id = "number-panel";
  //heading
  const title = document.createElement("h2");
  title.textContent = "FIND SPECIFIC FLIGHT";

  //place holder text for input box
  const search = searchInput({
    placeholder: "Enter flight number",
    onSearch,
  });
  const results = document.createElement("div");
  results.id = "number-results";

  //add features
  panel.appendChild(title);
  panel.appendChild(search);
  panel.appendChild(results);

  return { panel, results };
}
