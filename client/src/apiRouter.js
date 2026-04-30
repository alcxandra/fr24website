export async function flightAirportAPI(airport) {
  const res = await fetch(`/flights?airport=${airport}`);
  return res.json();
}

export async function flightNumberAPI(flight) {
  const res = await fetch(`/flights?flight=${flight}`);
  return res.json();
}

export async function airportCountAPI(airport) {
  const res = await fetch(`/flights?airport=${airport}`);
  return res.json();
}
