"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (
      storedTheme === "dark" ||
      (!storedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <div
      className={`w-16 h-8 bg-gray-300 dark:bg-gray-700 flex items-center ${isDarkMode ? "justify-end" : "justify-start"} rounded-full p-1 cursor-pointer transition-all`}
      onClick={toggleDarkMode}
      data-ison={isDarkMode}
    >
      <motion.div
        className="w-6 h-6 bg-white dark:bg-yellow-400 rounded-full shadow-md"
        layout
        transition={spring}
      />
    </div>
  );
}

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30
};