export function airportSearch(flights, airport) {
  //container to hold results
  const container = document.createElement("div");

  //populate panel with results
  //api limits results to 20

  container.innerHTML = `<p> There are <strong> ${flights.length}</strong> flights operating around ${airport.toUpperCase()}.</p>
  <p>If airport returns 20, flight results may be higher in actuality. </p>`;

  return container;
}
