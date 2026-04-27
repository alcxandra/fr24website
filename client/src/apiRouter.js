export async function flightR24API(airport) {
  const url = `http://localhost:5173/flights?airport=${airport}`;

  const response = await fetch(url);
  const data = await response.json();

  return data;
}
