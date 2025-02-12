import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Login from "./login";
import Home from "./home";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

