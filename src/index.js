import React from "react";
import ReactDOM from "react-dom/client";
import "./App.scss";
import App from "./App";
import Shop from "./components/Shop";
import Project from "./components/Project";
import About from "./components/About";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/CharterRich" element={<App />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/project" element={<Project />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </Router>
);
