import React, { useEffect } from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { Box } from "@mui/material";

import ExerciseDetail from "./pages/ExerciseDetail";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      document.title = "eFit Application - Home";
    } else if (location.pathname.startsWith("/exercise/")) {
      document.title = "eFit Application - Exercise Details";
    } else {
      document.title = "eFit Application";
    }
  }, [location.pathname]);

  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
