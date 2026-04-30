import {
  flightAirportAPI,
  flightNumberAPI,
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
import { altitudePanel } from "./components/altitudePanel.js";
import { altitudeChart } from "./components/altitudeChart.js";
import { radarChart } from "./components/radarChart.js";
import { radarPanel } from "./components/radarPanel.js";

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

const { panel: altitudePanel2, results: altitudeResults } =
  altitudePanel(handleAltitudeSearch);

//no need for results - no input from user
const { panel: radarPanel2, chartContainer } = radarPanel();

//add panels to code
app.appendChild(departuresPanel2);
app.appendChild(arrivalsPanel2);
app.appendChild(numberPanel2);
app.appendChild(airportPanel2);
app.appendChild(altitudePanel2);
app.appendChild(radarPanel2);

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
    const data = await flightNumberAPI(flight);

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

async function handleAltitudeSearch(flights) {
  //store results for chart
  const results = [];

  for (let flight of flights) {
    //call api for inputted flights
    //find info for those flights
    const res = await flightNumberAPI(flight);
    const data = res.data?.[0];

    results.push({
      code: flight,
      altitude: data?.alt || 0,
    });
  }

  altitudeResults.innerHTML = "";
  altitudeResults.appendChild(altitudeChart(results));
}

//initialise radar
//LHR as api needs airport
async function pushRadar() {
  const data = await flightAirportAPI("LHR");
  const flights = data.data || [];

  app.appendChild(radarChart(flights));
}
pushRadar();
