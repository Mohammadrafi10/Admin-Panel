import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
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
      text: "بازدید کنندگان وبسایت",
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
  labels: [
    "شنبه",
    "یکشنبه",
    "دوشنبه",
    "سه شنبه",
    "چهارشنبه",
    "پنجشنبه",
    "جمعه",
  ],
  datasets: [
    {
      label: "بازدید کنندگان",
      data: [1200, 1900, 1500, 2500, 2200, 2800, 2100],
      borderColor: "rgb(147, 51, 234)",
      backgroundColor: "rgba(147, 51, 234, 0.1)",
      tension: 0.4,
      fill: true,
      pointBackgroundColor: "rgb(147, 51, 234)",
      pointBorderColor: "#fff",
      pointBorderWidth: 2,
      pointRadius: 4,
      pointHoverRadius: 6,
    },
    {
      label: "کاربران فعال",
      data: [800, 1200, 950, 1700, 1400, 1900, 1400],
      borderColor: "rgb(59, 130, 246)",
      backgroundColor: "rgba(59, 130, 246, 0.1)",
      tension: 0.4,
      fill: true,
      pointBackgroundColor: "rgb(59, 130, 246)",
      pointBorderColor: "#fff",
      pointBorderWidth: 2,
      pointRadius: 4,
      pointHoverRadius: 6,
    },
  ],
};

function LineChart() {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
      <div className="h-[400px]">
        <Line options={options} data={data} />
      </div>
    </div>
  );
}

export default LineChart;
