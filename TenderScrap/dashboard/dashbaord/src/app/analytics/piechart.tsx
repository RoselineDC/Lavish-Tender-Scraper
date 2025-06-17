"use client";

import React from "react";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
  Tooltip,
  Legend
);

const MonthlyRecapChart = () => {
  const labels = ["January", "February", "March", "April", "May", "June", "July"];

  const data = {
    labels,
    datasets: [
      {
        label: "This Year",
        data: [3, 5, 40, 20, 8, 3, 9],
        fill: true,
        backgroundColor: "rgba(33, 150, 243, 0.6)", // Blue area
        borderColor: "rgba(33, 150, 243, 1)",
        tension: 0.4,
        pointRadius: 0,
      },
      {
        label: "Last Year",
        data: [7, 6, 8, 5, 0, 3, 5],
        fill: true,
        backgroundColor: "rgba(200, 200, 200, 0.4)", // Grey area
        borderColor: "rgba(200, 200, 200, 1)",
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: "Monthly Recap Report",
        color: "#333",
        font: {
          size: 18,
          weight: "bold",
        },
        align: "start",
      },
      subtitle: {
        display: true,
        text: "Sales: 1 Jan, 2014 - 30 Jul, 2014",
        color: "#000",
        font: {
          size: 12,
          weight: "bold",
        },
        align: "start",
      },
    },
    scales: {
      y: {
        min: 0,
        max: 9,
        ticks: {
          stepSize: 10,
        },
        grid: {
          drawBorder: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };
  return (
    <div className="p-4 bg-white rounded shadow">
      <Line data={data} options={options} />
      <div className="text-center font-bold mt-4">Goal Completion</div>
    </div>
  );
};

export default MonthlyRecapChart;