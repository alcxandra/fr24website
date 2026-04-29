import {
  flightAirportAPI,
  flightCallSignAPI,
  airportCountAPI,
} from "./apiRouter.js";
import { departuresSearch } from "./components/departuresSearch.js";
import { arrivalsSearch } from "./components/arrivalsSearch.js";
import { departuresPanel } from "./components/departuresPanel.js";
import { arrivalsPanel } from "./components/arrivalsPanel.js";
import { numberPanel } from "./components/numberPanel.js";
import { numberSearch } from "./components/numberSearch.js";
import { airportPanel } from "./components/airportPanel.js";
import { airportSearch } from "./components/airportSearch.js";

const app = document.getElementById("app");
app.innerHTML = "";

//create panels and where results will be stored
const { panel: departuresPanel2, results: departureResults } = departuresPanel(
  handleDeparturesSearch,
);

const { panel: arrivalsPanel2, results: arrivalsResults } =
  arrivalsPanel(handleArrivalsSearch);

const { panel: numberPanel2, results: numberResults } =
  numberPanel(handleNumberSearch);

const { panel: airportPanel2, results: airportResults } =
  airportPanel(handleAirportSearch);

//add panels to code
app.appendChild(departuresPanel2);
app.appendChild(arrivalsPanel2);
app.appendChild(numberPanel2);
app.appendChild(airportPanel2);

//handle search
async function handleDeparturesSearch(airport) {
  try {
    //wait for response from api
    const data = await flightAirportAPI(airport);

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
    const data = await flightAirportAPI(airport);

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

//flight number
async function handleNumberSearch(flight) {
  try {
    //wait for response from api
    const data = await flightCallSignAPI(flight);

    console.log("API response:", data);
    //extract flight data
    const flights = data.data || [];
    //show all data from dataset in console log

    numberResults.innerHTML = "";
    //display flight number results
    numberResults.appendChild(numberSearch(flights, flight));
  } catch (err) {
    console.error(err);
    numberResults.innerHTML = "Error loading flight";
  }
}

//airport plane search
async function handleAirportSearch(airport) {
  try {
    //wait for response from api
    const data = await airportCountAPI(airport);

    console.log("Api max:", data.data?.length);
    console.log(data);

    //extract flight data
    const flights = data.data || [];

    airportResults.innerHTML = "";
    //display airport plane total
    airportResults.appendChild(airportSearch(flights, airport));
  } catch (err) {
    console.error(err);
    airportResults.innerHTML = "Error loading flight count";
  }
}
