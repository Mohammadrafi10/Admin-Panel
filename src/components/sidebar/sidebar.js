import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  HiMenuAlt3,
  HiOutlineHome,
  HiOutlineUserGroup,
  HiOutlineCog,
  HiOutlineDocumentText,
  HiOutlineLogout,
} from "react-icons/hi";
import { MdProductionQuantityLimits } from "react-icons/md";

function Sidebar() {
  const [open, setOpen] = useState(true);

  const menus = [
    { name: "Dashboard", Link: "/", icon: HiOutlineHome },
    { name: "Products", Link: "/products", icon: MdProductionQuantityLimits },
    { name: "Users", Link: "/users", icon: HiOutlineUserGroup },
    { name: "Documents", Link: "/documents", icon: HiOutlineDocumentText },
    { name: "Settings", Link: "/settings", icon: HiOutlineCog },
    { name: "Logout", Link: "/logout", icon: HiOutlineLogout },
  ];

  return (
    <div
      className={`min-h-screen fixed top-0 right-0 z-50 ${
        open ? "w-72" : "w-16"
      } duration-500 text-gray-100 px-4 bg-gray-900`}
    >
      <div className="py-3 flex justify-start relative">
        <button
          className="absolute right-0 top-5 bg-gray-900 text-gray-100 rounded-full p-1 hover:bg-gray-800 focus:outline-none"
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
      <div className="mt-8 flex flex-col gap-4 relative">
        {menus?.map((menu, i) => (
          <Link
            to={menu?.Link}
            key={i}
            className={`group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
          >
            <div className="min-w-[20px]">
              <menu.icon size={20} />
            </div>
            <h2
              style={{ transitionDelay: `${i + 3}00ms` }}
              className={`whitespace-pre duration-500 ${
                !open && "opacity-0 -translate-x-28 overflow-hidden"
              }`}
            >
              {menu?.name}
            </h2>
            <h2
              className={`${
                open && "hidden"
              } absolute right-14 bg-gray-900 font-semibold whitespace-pre text-gray-100 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:right-14 group-hover:duration-300 group-hover:w-fit`}
            >
              {menu?.name}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
