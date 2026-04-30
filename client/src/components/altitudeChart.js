let singleChart;

export function altitudeChart(flightData) {
  const container = document.createElement("div");
  //class for css
  container.className = "chartAltitude-wrap";

  //create canvas for charts and attach to container
  const canvas = document.createElement("canvas");
  container.appendChild(canvas);

  //ensure one single chart is destroyed
  if (singleChart) singleChart.destroy();

  //create scatter graph
  singleChart = new Chart(canvas, {
    type: "scatter",

    data: {
      datasets: [
        {
          label: "",
          //convert api data to x and y format for chart
          data: flightData.map((flight, index) => ({
            //x for positioning, no actual value
            //y for altitude
            x: index + 1,
            y: flight.altitude,
          })),
          //size of points and color
          pointRadius: 4,
          backgroundColor: "#00ff3c",
        },
      ],
    },
    options: {
      plugins: {
        title: {
          //show title and colour it
          display: true,
          text: "ALTITUDE COMPARISON",
          color: "#00ff3c",
        },
      },
      scales: {
        x: {
          //show x axis, color
          //and basic vertical grids
          display: true,
          ticks: { color: "#ffffff" },
          grid: { color: "#073613" },
          border: { color: "#073613" },
        },

        y: {
          //y axis
          beginAtZero: true,
          ticks: { color: "#ffffff" },
        },
      },
    },
  });

  return container;
}
