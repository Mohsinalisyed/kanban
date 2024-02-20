import React from "react";
import { ThemeProvider } from "styled-components";
import "./App.css";
import { darkTheme, lightTheme } from "./theme/Theme";
import { GlobalStyles } from "./theme/GlobalStyle";
import { useDarkMode } from "./hooks/useTheme";
import MainSidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./view/Main";
import Platform from "./view/Platform";
import { Box } from "./lib/Ui/Box";
const App = () => {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  return (
    <BrowserRouter>
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <div style={{ position: "relative" }}>
        <MainSidebar theme={theme} toggleTheme={themeToggler} />
        <div style={{ position: "absolute", top: "0", width: "100%", }}>
          <Header />
          
            <Box style={{ marginLeft: "260px", padding: "20px" }}>
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/platform" element={<Platform />} />
                {/* Add more routes as needed */}
              </Routes>
           </Box>
          
        </div>
      </div>
    </ThemeProvider >
    </BrowserRouter >

  );
};
export default App;