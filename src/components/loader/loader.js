import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  HiOutlineHome,
  HiOutlineUserGroup,
  HiOutlineCog,
  HiOutlineDocumentText,
} from "react-icons/hi";
import { MdProductionQuantityLimits } from "react-icons/md";

const Loader = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);

  const menuItems = [
    { Icon: HiOutlineHome, label: "Dashboard" },
    { Icon: MdProductionQuantityLimits, label: "Products" },
    { Icon: HiOutlineUserGroup, label: "Users" },
    { Icon: HiOutlineDocumentText, label: "Documents" },
    { Icon: HiOutlineCog, label: "Settings" },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/dashboard");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 4));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 bg-white dark:bg-gray-900 flex items-center justify-center z-[9999]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="relative w-full max-w-md px-4 flex flex-col items-center">
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/20 to-purple-50/20 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl filter blur-xl" />

        {/* Logo/Brand */}
        <motion.div
          className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Admin Panel
        </motion.div>

        {/* Icons Grid */}
        <div className="grid grid-cols-5 gap-4 mb-8">
          {menuItems.map(({ Icon, label }, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              <motion.div
                className="w-12 h-12 mb-2 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 
                         dark:from-blue-500/20 dark:to-purple-500/20 flex items-center justify-center
                         border border-blue-100 dark:border-blue-800 backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                animate={{
                  y: [0, -4, 0],
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                  },
                }}
              >
                <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </motion.div>
              <span className="text-xs text-gray-600 dark:text-gray-400">
                {label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Progress bar */}
        <div className="w-full h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden mb-4">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        {/* Loading text with shimmer effect */}
        <motion.div
          className="relative text-sm font-medium overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <span className="text-gray-600 dark:text-gray-400">
            Loading your dashboard
          </span>
          <motion.span
            className="inline-block"
            animate={{
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            ...
          </motion.span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Loader;
