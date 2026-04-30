export function departuresSearch(flights, airport) {
  //container to hold results
  const container = document.createElement("div");
  container.id = "results";

  //filter only departures of airport
  const departures = flights.filter((flight) => flight.orig_iata === airport);

  //if no departures, return No...
  if (!departures.length) {
    container.textContent = "No departures found";
    return container;
  }

  //limit to first 4 flights
  departures.slice(0, 4).forEach((flight) => {
    const card = document.createElement("div");
    //seperate cards for css
    card.className = "flight-card";

    //convert time - cut date from API date result
    const formattedTime = flight.eta
      ? new Date(flight.eta).toLocaleTimeString()
      : "N/A";

    //populate card with data
    //flight number
    //from departure air to arrival airport
    //eta time
    //n/a if data missing
    card.innerHTML = `
      <p><strong>${flight.callsign || "N/A"}</strong></p>
      <p>${flight.orig_iata || "?"} → ${flight.dest_iata || "?"}</p>
      <p>ETA: ${new Date(flight.eta).toLocaleTimeString()}</p>
    `;

    container.appendChild(card);
  });

  return container;
}
