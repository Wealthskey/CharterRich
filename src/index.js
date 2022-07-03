import React from "react";
import ReactDOM from "react-dom/client";
import "./App.scss";
import App from "./App";
import Shop from "./components/Shop";
import About from "./components/About";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
const root = ReactDOM.createRoot(document.getElementById("root"));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "charterrich/public/index.html"));
});

root.render(
  <Router>
    <ScrollToTop>
      <Routes>
        <Route path="/CharterRich" element={<App />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </ScrollToTop>
  </Router>
);
