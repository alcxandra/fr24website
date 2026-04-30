import { searchInput } from "./searchInput.js";
import "./airportPanel.css";

export function airportPanel(onSearch) {
  //container for panel
  //for css
  const panel = document.createElement("div");
  panel.id = "airport-panel";
  //heading
  const title = document.createElement("h2");
  title.textContent = "FLIGHTS BY AIRPORT";

  //place holder text for input box
  const search = searchInput({
    placeholder: "Enter airport code",
    onSearch,
  });
  const results = document.createElement("div");
  results.id = "airport-results";

  //add features
  panel.appendChild(title);
  panel.appendChild(search);
  panel.appendChild(results);

  return { panel, results };
}
