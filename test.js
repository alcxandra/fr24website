// const https = require("https");

// const API_KEY =
//   "019d92a6-baa6-702c-81db-d87fdc1fc116|erm2CXBNWlbpe4UyjbrOH14euY68eoOaKMfW5hlB8722a4b4";

// //endpoint and query
// //req data from heathrow and retrieve
// const options = {
//   hostname: "fr24api.flightradar24.com",
//   path: "/api/live/flight-positions/full?airports=LHR",
//   method: "GET",
//   headers: {
//     Authorization: `Bearer ${API_KEY}`,
//     "Accept-Version": "v1",
//   },
// };

// //show respond status
// const req = https.request(options, (res) => {
//   console.log("Status Code:", res.statusCode);
//   let data = "";

//   res.on("data", (chunk) => (data += chunk));
//   res.on("end", () => {
//     try {
//       const json = JSON.parse(data);

//       console.log("success");
//       console.log("keys:", Object.keys(json));

//       //display first flight data
//       if (json.result) {
//         console.log("\nFirst flight:");
//         console.log(json.result[0]);
//       } else {
//         console.log("\nResponse:");
//         console.log(json);
//       }
//     } catch {
//       console.log("Raw response:", data);
//     }
//   });
// });

// req.on("error", (err) => {
//   console.error("Error:", err.message);
// });

// req.end();
