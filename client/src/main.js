import { flightR24API } from "./apiRouter.js";
import { departuresPanel } from "./components/departuresPanel.js";
import { resultSearch } from "./components/searchResult.js";

const app = document.getElementById("app");
app.innerHTML = "";

//create departures panel
const { panel, results } = departuresPanel(handleSearch);
app.appendChild(panel);

//handle search
async function handleSearch(airport) {
  results.innerHTML = "Loading...";

  try {
    //wait for response from api
    const data = await flightR24API(airport);

    const flights = data.data || [];
    console.log(data.data[0]);

    results.innerHTML = "";
    results.appendChild(resultSearch(flights, airport));
  } catch (err) {
    console.error(err);
    results.innerHTML = "Error loading departures";
  }
}
