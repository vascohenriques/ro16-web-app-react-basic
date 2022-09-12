import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./shared/components/globalStyles";
import { lightTheme, darkTheme } from "./shared/Themes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./shared/components/Navbar";
import MainContent from "./shared/components/MainContent";
import Home from "./views/home/Home";
import Flat from "./views/flat/Flat";
import Statute from "./views/statute/Statute";
import Meetings from "./views/meetings/Meetings";

function App() {
  const [theme, setTheme] = useState("light");
  const [isAdmin] = useState(true);

  const toggleTheme = () => {
    if (theme === "light") setTheme("dark");
    if (theme === "dark") setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Router>
        <GlobalStyles />
        <Navbar isAdmin={isAdmin} theme={theme} toggleTheme={toggleTheme} />
        <MainContent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/flat" element={<Flat />} />
            <Route path="/meetings" element={<Meetings />} />
            <Route path="/statute" element={<Statute />} />
          </Routes>
        </MainContent>
      </Router>
    </ThemeProvider>
  );
}

export default App;
