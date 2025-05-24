import React, { useState } from "react";
import { HiOutlineBell, HiOutlineSearch, HiOutlineUser } from "react-icons/hi";

function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 fixed z-20 w-full">
      <div className="px-3 py-3 lg:px-5 lg:pr-3 mr-16">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {/* Search Bar */}
            <div className="hidden md:flex relative">
              <div className="inline-flex items-center justify-center absolute right-0 top-0 h-full w-10 text-gray-400">
                <HiOutlineSearch className="w-5 h-5" />
              </div>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pr-10 p-2.5 text-right"
                placeholder="...جستجو"
              />
            </div>

            {/* Mobile Search Icon */}
            <button
              className="md:hidden p-2 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <HiOutlineSearch className="w-5 h-5" />
            </button>

            {/* Notifications */}
            <button
              type="button"
              className="p-2 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 mx-2"
            >
              <div className="relative">
                <HiOutlineBell className="w-5 h-5" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">3</span>
                </div>
              </div>
            </button>

            {/* Profile */}
            <button
              type="button"
              className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300"
            >
              <HiOutlineUser className="w-8 h-8 rounded-full text-white p-1" />
            </button>
          </div>

          <div className="flex items-center justify-end">
            <a
              href="/"
              className="text-xl font-bold flex items-center lg:mr-2.5"
            >
              <span className="self-center whitespace-nowrap">Admin Panel</span>
            </a>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isSearchOpen && (
          <div className="md:hidden mt-3">
            <div className="relative">
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <HiOutlineSearch className="w-5 h-5 text-gray-500" />
              </div>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pr-10 p-2.5 text-right"
                placeholder="...جستجو"
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
