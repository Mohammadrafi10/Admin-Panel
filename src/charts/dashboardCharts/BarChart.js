import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
      labels: {
        font: {
          size: 12,
          family: "'Vazirmatn', sans-serif",
        },
        color: "#6B7280",
      },
    },
    title: {
      display: true,
      text: "Monthly Sales Overview",
      font: {
        size: 16,
        family: "'Vazirmatn', sans-serif",
        weight: "bold",
      },
      color: "#374151",
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        color: "#E5E7EB",
      },
      ticks: {
        font: {
          family: "'Vazirmatn', sans-serif",
        },
        color: "#6B7280",
      },
    },
    x: {
      grid: {
        display: false,
      },
      ticks: {
        font: {
          family: "'Vazirmatn', sans-serif",
        },
        color: "#6B7280",
      },
    },
  },
};

const data = {
  labels: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور"],
  datasets: [
    {
      label: "فروش محصولات",
      data: [65, 59, 80, 81, 56, 55],
      backgroundColor: "rgba(129, 140, 248, 0.8)",
      borderColor: "rgb(99, 102, 241)",
      borderWidth: 1,
      borderRadius: 5,
      hoverBackgroundColor: "rgb(99, 102, 241)",
    },
    {
      label: "سود خالص",
      data: [45, 40, 60, 70, 45, 40],
      backgroundColor: "rgba(52, 211, 153, 0.8)",
      borderColor: "rgb(16, 185, 129)",
      borderWidth: 1,
      borderRadius: 5,
      hoverBackgroundColor: "rgb(16, 185, 129)",
    },
  ],
};

function BarChart() {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
      <div className="h-[400px]">
        <Bar options={options} data={data} />
      </div>
    </div>
  );
}

export default BarChart;
