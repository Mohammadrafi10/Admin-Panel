import { useState, useEffect } from "react";
import Home from "./pages/home/home";
import Products from "./pages/products/products";
import Login from "./components/login/login";
import Loader from "./components/loader/loader";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HiMoon, HiSun } from "react-icons/hi";


function DarkModeButton({ isDark, darkMode }) {
  const location = useLocation();

  // Don't show the button on the login page
  if (location.pathname === "/login") {
    return null;
  }

  return (
    <button
      className="fixed bottom-4 right-2 p-3 rounded-full shadow-lg transition-all duration-300 ease-in-out hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-400 focus:ring-white z-[9999]"
      onClick={darkMode}
      style={{
        background: isDark ? "#ffffff" : "#1a1a1a",
        color: isDark ? "#1a1a1a" : "#ffffff",
      }}
      aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      {isDark ? <HiSun className="w-6 h-6" /> : <HiMoon className="w-6 h-6" />}
    </button>
  );
}

function App() {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("darkMode") === "true" || false
  );

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", isDark);
  }, [isDark]);

  const darkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="relative min-h-screen bg-white dark:bg-gray-900">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="/loader" element={<Loader />} />
        </Routes>
        <DarkModeButton isDark={isDark} darkMode={darkMode} />
      </BrowserRouter>
    </div>
  );
}

export default App;
