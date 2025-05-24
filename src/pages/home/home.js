import Navbar from "../../components/navbar/navbar";
import Sidebar from "../../components/sidebar/sidebar";

function Home() {
  return (
    <div className="flex flex-row-reverse">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <main className="p-4 mt-16 ml-0 mr-16">
          <h2 className="text-2xl font-semibold dark:text-white">
            Welcome to Dashboard
          </h2>
          {/* {main content is here} */}
        </main>
      </div>
    </div>
  );
}

export default Home;
