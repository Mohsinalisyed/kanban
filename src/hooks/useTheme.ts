import { useState, useEffect } from "react";

export const useDarkMode = (): [string, () => void] => {
  const storedTheme = localStorage.getItem("theme") || "light";
  const [theme, setTheme] = useState<string>(storedTheme);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return [theme, toggleTheme];
};
