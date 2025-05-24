import React, { useState } from "react";
import {
  HiOutlineBell,
  HiOutlineSearch,
  HiOutlineUser,
  HiMenu,
} from "react-icons/hi";

function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 fixed z-20 w-full">
      <div className="px-3 py-3 lg:px-5 lg:pr-3 mr-16">
        <div className="flex items-center justify-between">
          {/* Logo/Brand - Right Side */}
          <div className="flex items-center justify-end">
            <a
              href="/"
              className="text-xl font-bold flex items-center lg:mr-2.5"
            >
              <span className="self-center whitespace-nowrap text-gray-800 dark:text-white">
                Admin Panel
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
          >
            <HiMenu className="w-6 h-6" />
          </button>

          {/* Desktop Navigation - Left Side */}
          <div
            className={`flex items-center ${
              isMobileMenuOpen
                ? "flex-col absolute top-full left-0 right-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4 space-y-4"
                : "hidden md:flex"
            }`}
          >
            {/* Search Bar */}
            <div className="relative w-full md:w-64">
              <div className="inline-flex items-center justify-center absolute right-0 top-0 h-full w-10 text-gray-400 dark:text-gray-500">
                <HiOutlineSearch className="w-5 h-5" />
              </div>
              <input
                type="text"
                className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pr-10 p-2.5 text-right"
                placeholder="...جستجو"
              />
            </div>

            {/* Notifications */}
            <button
              type="button"
              className="p-2 text-gray-500 dark:text-gray-400 rounded-lg hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 mx-2"
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
              className="flex text-sm bg-gray-800 dark:bg-gray-600 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            >
              <HiOutlineUser className="w-8 h-8 rounded-full text-white p-1" />
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isSearchOpen && (
          <div className="md:hidden mt-3">
            <div className="relative">
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <HiOutlineSearch className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </div>
              <input
                type="text"
                className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pr-10 p-2.5 text-right"
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
