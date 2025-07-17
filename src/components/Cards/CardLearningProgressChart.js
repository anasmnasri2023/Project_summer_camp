import React from "react";
import * as Chart from "chart.js";

export default function CardLearningProgressChart() {
  React.useEffect(() => {
    const config = {
      type: "line",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: "Active Learners " + new Date().getFullYear(),
            backgroundColor: "#4c51bf",
            borderColor: "#4c51bf",
            data: [1200, 1450, 1380, 1650, 1820, 1950, 2100],
            fill: false,
            tension: 0.4,
          },
          {
            label: "Active Learners " + (new Date().getFullYear() - 1),
            fill: false,
            backgroundColor: "#fff",
            borderColor: "#fff",
            data: [800, 1050, 1200, 1150, 1300, 1400, 1500],
            tension: 0.4,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          title: {
            display: false,
            text: "Learning Progress Analytics",
            color: "white",
          },
          legend: {
            labels: {
              color: "white",
            },
            align: "end",
            position: "bottom",
          },
        },
        interaction: {
          mode: "index",
          intersect: false,
        },
        scales: {
          x: {
            ticks: {
              color: "rgba(255,255,255,.7)",
            },
            display: true,
            title: {
              display: false,
              text: "Month",
              color: "white",
            },
            grid: {
              display: false,
              borderDash: [2],
              color: "rgba(33, 37, 41, 0.3)",
            },
          },
          y: {
            ticks: {
              color: "rgba(255,255,255,.7)",
            },
            display: true,
            title: {
              display: false,
              text: "Active Learners",
              color: "white",
            },
            grid: {
              borderDash: [3],
              drawBorder: false,
              color: "rgba(255, 255, 255, 0.15)",
            },
          },
        },
      },
    };
    
    const ctx = document.getElementById("learning-progress-chart");
    if (ctx) {
      const myChart = new Chart.Chart(ctx, config);
      return () => myChart.destroy();
    }
  }, []);

  return (
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-700">
      <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full max-w-full flex-grow flex-1">
            <h6 className="uppercase text-blueGray-100 mb-1 text-xs font-semibold">
              Overview
            </h6>
            <h2 className="text-white text-xl font-semibold">Learning Progress</h2>
          </div>
        </div>
      </div>
      <div className="p-4 flex-auto">
        <div className="relative h-80">
          <canvas id="learning-progress-chart"></canvas>
        </div>
      </div>
    </div>
  );
}