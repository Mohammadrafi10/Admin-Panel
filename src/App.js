import { useState, useEffect } from "react";

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDark]);

  const darkMode = () => {
    setIsDark(!isDark);
  };
  return (
    <>
      <div
        className={`container flex justify-center items-center dark:bg-black dark:text-white w-full h-50 ${
          isDark ? "dark" : "light"
        }`}
      >
        <h1>Hello World</h1>
      </div>
      <button
        className="p-5 bg-blue-500 text-white rounded-md"
        onClick={darkMode}
      >
        Click me
      </button>
    </>
  );
}

export default App;
