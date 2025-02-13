import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Login from "./login";
import Home from "./home";
import Dashboard from "./Dashboard";
import Employees from "./Employees";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/LesEmployees" element={<Employees />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

