import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  HiMenuAlt3,
  HiOutlineHome,
  HiOutlineUserGroup,
  HiOutlineCog,
  HiOutlineDocumentText,
  HiOutlineLogout,
} from "react-icons/hi";
import { MdProductionQuantityLimits } from "react-icons/md";
import Loader from "../loader/loader";

function Sidebar() {
  const [open, setOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const menus = [
    { name: "Dashboard", Link: "/", icon: HiOutlineHome },
    { name: "Products", Link: "/products", icon: MdProductionQuantityLimits },
    { name: "Users", Link: "/users", icon: HiOutlineUserGroup },
    { name: "Documents", Link: "/documents", icon: HiOutlineDocumentText },
    { name: "Settings", Link: "/settings", icon: HiOutlineCog },
    { name: "Logout", Link: "/login", icon: HiOutlineLogout },
  ];

  const handleNavigation = (path) => {
    setIsLoading(true);
    // Simulate loading time
    setTimeout(() => {
      setIsLoading(false);
      navigate(path);
    }, 800); // Match with loader animation duration
  };

  return (
    <>
      {isLoading && <Loader />}
      <div
        className={`min-h-screen fixed top-0 right-0 z-50 ${
          open ? "w-72" : "w-16"
        } duration-500 bg-white dark:bg-gray-800 shadow-lg border-l border-gray-200 dark:border-gray-700`}
      >
        {/* Header/Toggle Section */}
        <div className="py-4 px-4 flex justify-between items-center border-b border-gray-200 dark:border-gray-700">
          <div className={`${!open && "scale-0 w-0"} duration-500`}>
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">
              Admin Panel
            </h2>
          </div>
          <button
            className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
            onClick={() => setOpen(!open)}
          >
            <HiMenuAlt3
              size={24}
              className={`transform duration-500 ${
                open ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>
        </div>

        {/* Menu Items */}
        <div className="mt-6 px-3 flex flex-col gap-2">
          {menus?.map((menu, i) => (
            <button
              key={i}
              onClick={() => handleNavigation(menu.Link)}
              className="group relative flex items-center gap-3.5 font-medium p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-300 w-full text-right"
            >
              <div className="min-w-[32px] w-8 flex items-center justify-center rounded-md bg-gray-100 dark:bg-gray-700 text-purple-600 dark:text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                <menu.icon size={20} />
              </div>
              <h2
                style={{ transitionDelay: `${i + 3}00ms` }}
                className={`whitespace-pre text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 duration-500 ${
                  !open && "opacity-0 -translate-x-28 overflow-hidden w-0"
                }`}
              >
                {menu?.name}
              </h2>
              {/* Tooltip for collapsed state */}
              <h2
                className={`${
                  open && "hidden"
                } absolute right-14 bg-white dark:bg-gray-800 font-semibold text-gray-700 dark:text-gray-300 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-3 group-hover:py-2 group-hover:right-14 group-hover:duration-300 group-hover:w-fit whitespace-nowrap border border-gray-200 dark:border-gray-700`}
              >
                {menu?.name}
              </h2>
              {/* Active indicator */}
              <div className="absolute bottom-0 right-0 left-0 h-0.5 bg-purple-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right"></div>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
