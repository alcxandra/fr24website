export function numberSearch(flights, flightNumber) {
  //container to hold results
  const container = document.createElement("div");

  //filter inputted flight
  //only get data for that flight
  const flightNumberResult = flights.filter((flight) => {
    const apiNumber = (flight.flight || "").toUpperCase().trim();
    return apiNumber === (flightNumber || "").toUpperCase().trim();
  });

  //if no departures, return No...
  if (!flightNumberResult.length) {
    container.textContent = "No flights found";
    return container;
  }

  //limit to one flight
  flightNumberResult.slice(0, 1).forEach((flight) => {
    const card = document.createElement("div");

    //convert time - cut date from API date result
    const formattedTime = flight.eta
      ? new Date(flight.eta).toLocaleTimeString()
      : "N/A";

    //populate card with data
    //origin
    //destination
    //altitude
    //speed
    card.innerHTML = `
    <div class = "number-card">
    <p><strong> ORIGIN:</strong> ${flight.orig_iata}</p>
    <p><strong> DESTINATION:</strong> ${flight.dest_iata}</p>
    <p><strong> ALTITUDE: </strong>${flight.alt}ft </p>
     <p><strong> SPEED:</strong> ${flight.gspeed}kts </p>
      <p> <strong> ETA: </strong> ${new Date(flight.eta).toLocaleTimeString()}</p>
      </div>
    `;

    container.appendChild(card);
  });

  return container;
}
