// src/App.js
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SplashScreen from "./components/SplashScreen"; // Path yang benar ke SplashScreen.js
import Welcome from "./components/Welcome";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/welcome" element={<Welcome />} />
        {/* Tambahkan route lain sesuai kebutuhan */}
      </Routes>
    </Router>
  );
}

export default App;

