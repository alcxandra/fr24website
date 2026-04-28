import { flightR24API } from "./apiRouter.js";
import { departuresSearch } from "./components/departuresSearch.js";
import { arrivalsSearch } from "./components/arrivalsSearch.js";
import { departuresPanel } from "./components/departuresPanel.js";
import { arrivalsPanel } from "./components/arrivalsPanel.js";

const app = document.getElementById("app");
app.innerHTML = "";

//create panels and where results will be stored
const { panel: departuresPanel2, results: departureResults } = departuresPanel(
  handleDeparturesSearch,
);

const { panel: arrivalsPanel2, results: arrivalsResults } =
  arrivalsPanel(handleArrivalsSearch);
//add panels to code
app.appendChild(departuresPanel2);
app.appendChild(arrivalsPanel2);

//handle search
async function handleDeparturesSearch(airport) {
  try {
    //wait for response from api
    const data = await flightR24API(airport);

    //extract flight data
    const flights = data.data || [];
    //show all data from dataset in console log
    console.log(data.data[0]);

    departureResults.innerHTML = "";
    //display departures
    departureResults.appendChild(departuresSearch(flights, airport));
  } catch (err) {
    departureResults.innerHTML = "Error loading departures";
  }
}

async function handleArrivalsSearch(airport) {
  try {
    //wait for response from api
    const data = await flightR24API(airport);

    //extract flight data
    const flights = data.data || [];
    //show all data from dataset in console log
    console.log(data.data[0]);

    arrivalsResults.innerHTML = "";
    //display arrivals
    arrivalsResults.appendChild(arrivalsSearch(flights, airport));
  } catch (err) {
    arrivalsResults.innerHTML = "Error loading arrivals";
  }
}
