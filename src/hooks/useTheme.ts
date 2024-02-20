import { useState, useEffect } from "react";

export const useDarkMode = (): [string, () => void] => {
  // Retrieve the theme from local storage or use 'light' as default
  const storedTheme = localStorage.getItem("theme") || "light";
  const [theme, setTheme] = useState<string>(storedTheme);

  // Update local storage whenever the theme changes
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return [theme, toggleTheme];
};
