import Navbar from "../../components/navbar/navbar";
import Sidebar from "../../components/sidebar/sidebar";
import Cards from "../cards/cards";
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
          <div className="grid grid-cols-1 md:grid-col-4 lg:grid-cols-3 bg-purple-100 dark:bg-gray-800 dark:text-white">
            {cardData.map((card) => (
              <Cards key={card.id} {...card} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
export default Content;
