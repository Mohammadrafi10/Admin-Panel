import React from "react";
import Navbar from "../../components/navbar/navbar";
import Sidebar from "../../components/sidebar/sidebar";
import Cards from "../cards/cards";
import {
  BarChart,
  LineChart,
  DoughnutChart,
} from "../../charts/dashboardCharts";

function Content() {
  let cardData = [
    {
      id: 1,
      title: "نرخ گردش",
      count: 2342,
    },
    {
      id: 2,
      title: "نرخ فروش",
      count: 1200,
    },
    {
      id: 3,
      title: "نرخ خرید",
      count: 1200,
    },
    {
      id: 4,
      title: "نرخ امروز",
      count: 1200,
    },
    {
      id: 5,
      title: "نرخ گردش",
      count: 2342,
    },
  ];
  return (
    <div className="flex flex-row-reverse">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <main className="p-4 mt-16 ml-0 mr-16">
          <h2 className="text-2xl font-semibold dark:text-white">
            Welcome to Dashboard
          </h2>
          <div className="rounded-md grid grid-cols-1 md:grid-col-4 lg:grid-cols-3 bg-purple-100 dark:bg-gray-800 dark:text-white">
            {cardData.map((card) => (
              <Cards key={card.id} {...card} />
            ))}
          </div>
          <div className="p-4 mt-14">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 dark:text-white">
              {/* Bar Chart */}
              <div className="w-full">
                <BarChart />
              </div>

              {/* Line Chart */}
              <div className="w-full">
                <LineChart />
              </div>

              {/* Doughnut Chart */}
              <div className="w-full lg:col-span-2">
                <DoughnutChart />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Content;
