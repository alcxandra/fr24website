import { searchInput } from "./searchInput.js";
import "./departuresPanel.css";

export function departuresPanel(onSearch) {
  //container for panel
  //for css
  const panel = document.createElement("div");
  panel.id = "departures-panel";
  //heading
  const title = document.createElement("h2");
  title.textContent = "DEPARTURES";

  //place holder text for input box
  const search = searchInput({
    placeholder: "Enter airport code",
    onSearch,
  });
  const results = document.createElement("div");
  results.id = "departures-results";

  //add features
  panel.appendChild(title);
  panel.appendChild(search);
  panel.appendChild(results);

  return { panel, results };
}
