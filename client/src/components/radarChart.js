import "./radarPanel.css";
let singleRadar;

export function radarChart(flights) {
  const container = document.createElement("div");
  container.className = "chartRadar-wrap";

  const canvas = document.createElement("canvas");
  const line = document.createElement("div");
  line.className = "radar-line";

  container.appendChild(canvas);
  container.appendChild(line);

  if (singleRadar) singleRadar.destroy();

  //actually is a scatter graph in a circle
  singleRadar = new Chart(canvas, {
    type: "scatter",
    //convert api data to chart points
    data: {
      datasets: [
        {
          label: "",
          data: flights.map((flight) => ({
            //map base on lon and lat
            x: flight.lon,
            y: flight.lat,
            //hover to see flight number or callsign and altitude
            flight: flight.flight,
            altitude: flight.alt,
          })),
          pointRadius: 5,
          backgroundColor: "#00ff3c",
        },
      ],
    },

    options: {
      maintainAspectRatio: false,

      plugins: {
        display: false,
        tooltip: {
          callbacks: {
            label: (context) => {
              //get data from data point, not here for alt
              return `${context.raw.flight} | ${context.raw.altitude} ft`;
            },
          },
        },
      },

      scales: {
        //hide all axis
        x: {
          display: false,
        },
        y: {
          display: false,
        },
      },
    },
  });

  return container;
}
