import React from "react";
import { ThemeProvider } from "styled-components";
import "./App.css";
import { darkTheme, lightTheme } from "./theme/Theme";
import { GlobalStyles } from "./theme/GlobalStyle";
import { useDarkMode } from "./hooks/useTheme";
import MainSidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import Button from "./lib/Ui/Button";
const App = () => {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <div style={{ position: "relative" }}>
        <MainSidebar theme={theme} toggleTheme={themeToggler} />
        <div style={{ position: "absolute", top: "0", width: "100%", }}>
          <Header />
          <div style={{ position: "absolute", left: "30%" }}>
            <div>
              <Button variant="primaryLarge">Button Primary (L)</Button>
              <Button variant="primarySmall">Button Primary (S)</Button>
              <Button variant="secondary">Button Secondary</Button>
              <Button variant="destructive">Button Destructive</Button>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider >

  );
};
export default App;