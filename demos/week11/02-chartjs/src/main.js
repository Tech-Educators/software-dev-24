import { Chart } from "chart.js/auto";

const chart = document.getElementById("myCanvas");
const bubble = document.getElementById("bubbleCanvas");

new Chart(chart, {
  type: "bar",
  data: {
    labels: ["Red", "Blue", "Orange", "Purple", "Green", "Yellow"],
    datasets: [
      {
        label: "# of votes",
        data: [10, 5, 6, 8, 3, 15],
        borderWidth: 2,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

new Chart(bubble, {
  type: "bubble",
  data: {
    datasets: [
      {
        label: "First Dataset",
        data: [
          {
            x: 1,
            y: 3,
            r: 10,
          },
          {
            x: 4,
            y: 16,
            r: 20,
          },
          {
            x: 12,
            y: 6,
            r: 10,
          },
          {
            x: 10,
            y: 10,
            r: 2,
          },
        ],
        backgroundColor: "rgb(255, 99, 132)",
        hoverBorderWidth: 2,
        hitRadius: 20,
      },
      {
        label: "Second Dataset",
        data: [
          {
            x: 10,
            y: 2,
            r: 15,
          },
          {
            x: 8,
            y: 5,
            r: 20,
          },
          {
            x: 2,
            y: 12,
            r: 15,
          },
        ],
        backgroundColor: "rgb(50, 122, 44)",
        hoverBorderColor: "rgb(0,0,0)",
        hoverBorderWidth: 2,
      },
    ],
  },
  options: {
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
    elements: {
      point: {
        pointStyle: "triangle",
      },
    },
  },
});
