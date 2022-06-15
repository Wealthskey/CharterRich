import React from "react";
// import { ThemeProvider } from "styled-components";
// import { Container } from "./components/styles/Container.styled";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
