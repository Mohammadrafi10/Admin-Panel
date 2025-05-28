import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  HiOutlineBell,
  HiOutlineSearch,
  HiOutlineUser,
  HiMenu,
  HiX,
} from "react-icons/hi";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 z-40">
      <div className="mx-auto px-4 pr-20">
        <div className="relative flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex-1 flex justify-start">
            <Link to="/login" className="flex items-center">
              <span className="text-xl font-bold text-gray-800 dark:text-white">
                Admin Panel
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Items */}
          <div className="hidden lg:flex items-center space-x-6 space-x-reverse mr-6">
            {/* Search Bar */}
            <div className="relative w-72">
              <input
                type="text"
                placeholder="...جستجو"
                className="w-full h-10 pr-10 pl-4 py-2 text-right bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <HiOutlineSearch className="h-5 w-5 text-gray-400" />
              </div>
            </div>

            {/* Notifications */}
            <button className="relative p-2 text-gray-600 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
              <HiOutlineBell className="h-6 w-6" />
              <span className="absolute top-1 right-1 h-4 w-4 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-xs text-white">3</span>
              </span>
            </button>

            {/* Profile */}
            <button className="p-2 text-gray-600 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
              <HiOutlineUser className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700"
            >
              {isMobileMenuOpen ? (
                <HiX className="h-6 w-6" />
              ) : (
                <HiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden ${
            isMobileMenuOpen ? "block" : "hidden"
          } border-t border-gray-200 dark:border-gray-700`}
        >
          <div className="px-2 pt-2 pb-3 space-y-3">
            {/* Mobile Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="...جستجو"
                className="w-full h-10 pr-10 pl-4 py-2 text-right bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <HiOutlineSearch className="h-5 w-5 text-gray-400" />
              </div>
            </div>

            {/* Mobile Navigation Items */}
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center p-3 text-gray-600 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                <div className="relative">
                  <HiOutlineBell className="h-6 w-6" />
                  <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-xs text-white">3</span>
                  </span>
                </div>
                <span className="mr-3">اعلان‌ها</span>
              </button>

              <button className="flex items-center justify-center p-3 text-gray-600 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200">
                <Link to="/users" className="flex items-center">
                  <HiOutlineUser className="h-6 w-6" />
                  <span className="mr-3">پروفایل</span>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
