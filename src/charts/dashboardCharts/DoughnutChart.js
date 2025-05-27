import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "right",
      labels: {
        font: {
          size: 12,
          family: "'Vazirmatn', sans-serif",
        },
        color: "#6B7280",
        padding: 20,
      },
    },
    title: {
      display: true,
      text: "دسته‌بندی محصولات",
      font: {
        size: 16,
        family: "'Vazirmatn', sans-serif",
        weight: "bold",
      },
      color: "#374151",
    },
  },
  cutout: "70%",
};

const data = {
  labels: ["الکترونیک", "پوشاک", "لوازم خانگی", "کتاب", "ورزشی"],
  datasets: [
    {
      data: [35, 25, 20, 15, 5],
      backgroundColor: [
        "rgba(99, 102, 241, 0.8)",
        "rgba(52, 211, 153, 0.8)",
        "rgba(251, 146, 60, 0.8)",
        "rgba(147, 51, 234, 0.8)",
        "rgba(59, 130, 246, 0.8)",
      ],
      borderColor: [
        "rgb(99, 102, 241)",
        "rgb(16, 185, 129)",
        "rgb(234, 88, 12)",
        "rgb(147, 51, 234)",
        "rgb(59, 130, 246)",
      ],
      borderWidth: 1,
      hoverOffset: 4,
    },
  ],
};

function DoughnutChart() {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
      <div className="h-[400px]">
        <Doughnut options={options} data={data} />
      </div>
    </div>
  );
}

export default DoughnutChart;
