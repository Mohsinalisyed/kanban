import React from "react";
import { ThemeProvider } from "styled-components";
import "./App.css";
import { darkTheme, lightTheme } from "./theme/Theme";
import { GlobalStyles } from "./theme/GlobalStyle";
import { useDarkMode } from "./hooks/useTheme";
import MainSidebar from "./components/Sidebar/Sidebar";

const App = () => {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <MainSidebar theme={theme} toggleTheme={themeToggler} />
    </ThemeProvider>

  );
};
export default App;