import React from "react";
import ReactDOM from "react-dom/client";
import "./App.scss";
import App from "./App";
import Shop from "./components/Shop";
import About from "./components/About";
import "./i18n";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
const root = ReactDOM.createRoot(document.getElementById("root"));
// const { to, staticContext, ...rest } = this.props;
root.render(
  <Router>
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </ScrollToTop>
  </Router>
);
