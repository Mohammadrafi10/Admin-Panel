import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [loadingText, setLoadingText] = useState("Initializing");

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
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev >= 100 ? 100 : prev + 2;
        // Update loading text based on progress
        if (newProgress < 30) setLoadingText("Initializing");
        else if (newProgress < 60) setLoadingText("Loading resources");
        else if (newProgress < 90) setLoadingText("Preparing dashboard");
        else setLoadingText("Almost ready");
        return newProgress;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center z-[9999]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="relative w-full max-w-md px-4 flex flex-col items-center">
          {/* Animated background shapes */}
          <motion.div
            className="absolute inset-0 opacity-30"
            animate={{
              background: [
                "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 50% 50%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)",
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />

          {/* Logo/Brand */}
          <motion.div
            className="text-4xl font-bold mb-12 relative"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Admin Panel
            </span>
            <motion.div
              className="absolute -inset-4 border-2 border-blue-500/20 dark:border-blue-400/20 rounded-xl"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* Icons Grid */}
          <div className="grid grid-cols-5 gap-6 mb-12">
            {menuItems.map(({ Icon, label }, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <motion.div
                  className="w-14 h-14 mb-3 rounded-xl bg-white dark:bg-gray-800 flex items-center justify-center
                           shadow-lg shadow-blue-500/5 dark:shadow-blue-500/10
                           border border-blue-100 dark:border-blue-700/50 backdrop-blur-xl"
                  whileHover={{ scale: 1.05, rotate: [0, 5, -5, 0] }}
                  animate={{
                    y: [0, -6, 0],
                    transition: {
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.2,
                    },
                  }}
                >
                  <Icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                </motion.div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Progress bar */}
          <div className="w-full max-w-sm">
            <div className="w-full h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden mb-3 relative">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{
                  x: [-100, 300],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </div>

            {/* Loading text with fade effect */}
            <motion.div
              className="text-center"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                {loadingText}
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
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Loader;
