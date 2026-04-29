import express from "express";
import dotenv from "dotenv";
import https from "https";

dotenv.config();
const app = express();
const port = 3000;

//insert JSON middleware
app.use(express.json());

//get api key from dot env
const API_KEY = process.env.API_KEY;

//req data from api
function getFlightsByAirport(airport) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: "fr24api.flightradar24.com",
      path: `/api/live/flight-positions/full?airports=${airport}`,
      method: "GET",
      headers: {
        //api authentication and header
        Authorization: `Bearer ${API_KEY}`,
        "Accept-Version": "v1",
      },
    };

    const req = https.request(options, (res) => {
      let data = "";
      //collect data
      res.on("data", (chunk) => {
        data += chunk;
      });

      res.on("end", () => {
        try {
          const json = JSON.parse(data);
          resolve(json);
        } catch (err) {
          reject(err);
        }
      });
    });

    req.on("error", (err) => {
      reject(err);
    });
    req.end();
  });
}

//req data from api
function getFlightsByCallsign(flight) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: "fr24api.flightradar24.com",
      path: `/api/live/flight-positions/full?flights=${flight}`,
      method: "GET",
      headers: {
        //api authentication and header
        Authorization: `Bearer ${API_KEY}`,
        "Accept-Version": "v1",
      },
    };

    const req = https.request(options, (res) => {
      let data = "";
      //collect data
      res.on("data", (chunk) => {
        data += chunk;
      });

      res.on("end", () => {
        try {
          const json = JSON.parse(data);
          resolve(json);
        } catch (err) {
          reject(err);
        }
      });
    });

    req.on("error", (err) => {
      reject(err);
    });
    req.end();
  });
}

//handle front end requests - airport and flights
app.get("/flights", async (req, res) => {
  const { airport, flight, operating_as } = req.query;

  try {
    let data;

    //find by flight number
    if (flight) {
      data = await getFlightsByCallsign(flight);
      return res.json(data);
    }

    //airport
    if (airport) {
      data = await getFlightsByAirport(airport);
      return res.json(data);
    }

    return res.status(400).json({
      error: "Provide airport or flight",
    });
  } catch (err) {
    console.error("Server error:", err);
    res.status(500).json({ error: "Failed to fetch flights" });
  }
});
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
