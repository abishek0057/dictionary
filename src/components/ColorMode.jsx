import { useState, useLayoutEffect } from "react";

const ColorMode = () => {
  const [color, setColor] = useState(
    localStorage.getItem("color") ? localStorage.getItem("color") : "light"
  );
  const [rotation, setRotation] = useState("rotate-0");
  const colorMode = document.querySelector("html");

  useLayoutEffect(() => {
    colorMode.classList.add(color);
    localStorage.setItem("color", color);
  }, [color]);

  const handleTheme = (e) => {
    setRotation(rotation === "rotate-180" ? "rotate-360" : "rotate-180");
    if (colorMode.classList.contains("dark")) {
      setColor("light");
      colorMode.classList.remove("dark");
    } else {
      setColor("dark");
      colorMode.classList.add("dark");
    }
    localStorage.setItem("color", color);
  };

  return (
    <button
      className={`text-2xl select-none transition-all duration-300 ${rotation} font-sans`}
      onClick={handleTheme}
    >
      {color === "light" ? "🌑" : "🌞"}
    </button>
  );
};

export default ColorMode;
