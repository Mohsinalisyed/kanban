import React from "react";
import { ThemeProvider } from "styled-components";
import "./App.css";
import { darkTheme, lightTheme } from "./theme/Theme";
import { GlobalStyles } from "./theme/GlobalStyle";
import { useDarkMode } from "./hooks/useTheme";
import MainSidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Platform from "./view/Platform/Platform";
import { Box } from "./lib/Ui/Box";
import { Container } from "./style";
const App = () => {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  return (
    <Container>
      <BrowserRouter>
        <ThemeProvider theme={themeMode}>
          <GlobalStyles />
          <Box style={{ position: "relative" }}>
            <MainSidebar theme={theme} toggleTheme={themeToggler} />
            <Box style={{ position: "absolute", top: "0", width: "100%", }}>
              <Box style={{ position: "fixed", top: "0", width: "100%", background: themeMode.body, }}>
                <Header />
              </Box>
              <Box style={{ marginLeft: "250px", padding: "110px 24px 24px 24px", backgroundColor: themeMode.backgroundColor, }}>
                <Routes>
                  <Route path="/" element={<Platform theme={theme} />} />
                  {/* <Route path="/platform" element={<Platform />} /> */}
                </Routes>
              </Box>
            </Box>
          </Box>
        </ThemeProvider >
      </BrowserRouter >
    </Container >
  );
};
export default App;