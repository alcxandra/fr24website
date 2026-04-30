import { searchInput } from "./searchInput.js";
import "./altitudePanel.css";

export function altitudePanel(onSearch) {
  //container for panel
  //for css
  const panel = document.createElement("div");
  panel.id = "altitude-panel";

  //heading
  const title = document.createElement("h2");
  title.textContent = "COMPARE FLIGHT ALTITUDES";

  const inputContainer = document.createElement("div");
  inputContainer.className = "altitude-inputs";

  const inputs = [];

  for (let i = 0; i < 4; i++) {
    const input = document.createElement("input");
    input.placeholder = `Enter flight ${i + 1}`;

    inputs.push(input);
    inputContainer.appendChild(input);
  }

  const button = document.createElement("button");
  button.textContent = "Compare";

  const results = document.createElement("div");
  results.id = "altitude-results";

  button.addEventListener("click", () => {
    const flights = inputs.map((inp) => inp.value.trim()).filter(Boolean);

    if (!flights.length) {
      results.textContent = "Enter at least two flights";
      return;
    }
    onSearch(flights);
  });
  //add features
  panel.appendChild(title);
  panel.appendChild(button);
  panel.appendChild(inputContainer);
  panel.appendChild(results);

  return { panel, results };
}
