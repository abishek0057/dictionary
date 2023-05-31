import { useState } from "react";

const ColorMode = () => {
  const handleTheme = (e) => {
    setTheme(theme === "light" ? "dark" : "light");
    setRotation(rotation === "rotate-180" ? "rotate-360" : "rotate-180");
  };
  const [theme, setTheme] = useState("light");
  const [rotation, setRotation] = useState("rotate-180");
  return (
    <button
      className={`text-2xl select-none transition-all duration-300 ${rotation} font-sans`}
      onClick={handleTheme}
    >
      {theme === "light" ? "🌑" : "🌞"}
    </button>
  );
};

export default ColorMode;
