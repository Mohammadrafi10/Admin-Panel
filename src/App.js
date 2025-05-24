// import { useState, useEffect } from "react";
import Home from "./pages/home/home";
import Products from "./pages/products/products";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  // const [isDark, setIsDark] = useState(false);

  // useEffect(() => {
  //   if (isDark) {
  //     document.body.classList.add("dark");
  //   } else {
  //     document.body.classList.remove("dark");
  //   }
  // }, [isDark]);

  // const darkMode = () => {
  //   setIsDark(!isDark);
  // };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
