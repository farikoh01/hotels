// src/App.js
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Welcome from "./components/Welcome";
import HomeScreen from "./components/homescreen";
import SplashScreen from "./components/splashscreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/homescreen" element={<HomeScreen />} />
        {/* Tambahkan route lain sesuai kebutuhan */}
      </Routes>
    </Router>
  );
}
export default App;