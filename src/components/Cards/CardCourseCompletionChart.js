import React from "react";
import * as Chart from "chart.js";

export default function CardCourseCompletionChart() {
  React.useEffect(() => {
    const config = {
      type: "bar",
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
            label: "Completions " + new Date().getFullYear(),
            backgroundColor: "#10b981",
            borderColor: "#10b981",
            data: [180, 220, 195, 240, 280, 320, 350],
            barThickness: 8,
          },
          {
            label: "Completions " + (new Date().getFullYear() - 1),
            backgroundColor: "#4c51bf",
            borderColor: "#4c51bf",
            data: [120, 150, 140, 180, 200, 240, 260],
            barThickness: 8,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          title: {
            display: false,
            text: "Course Completions",
          },
          legend: {
            labels: {
              color: "rgba(0,0,0,.4)",
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
            display: false,
            title: {
              display: true,
              text: "Month",
            },
            grid: {
              borderDash: [2],
              color: "rgba(33, 37, 41, 0.3)",
            },
          },
          y: {
            display: true,
            title: {
              display: false,
              text: "Completions",
            },
            grid: {
              borderDash: [2],
              drawBorder: false,
              color: "rgba(33, 37, 41, 0.2)",
            },
          },
        },
      },
    };
    
    const ctx = document.getElementById("course-completion-chart");
    if (ctx) {
      const myChart = new Chart.Chart(ctx, config);
      return () => myChart.destroy();
    }
  }, []);

  return (
    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
      <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full max-w-full flex-grow flex-1">
            <h6 className="uppercase text-blueGray-400 mb-1 text-xs font-semibold">
              Performance
            </h6>
            <h2 className="text-blueGray-700 text-xl font-semibold">
              Course Completions
            </h2>
          </div>
        </div>
      </div>
      <div className="p-4 flex-auto">
        <div className="relative h-80">
          <canvas id="course-completion-chart"></canvas>
        </div>
      </div>
    </div>
  );
}