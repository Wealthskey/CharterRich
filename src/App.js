import React from "react";
// import { ThemeProvider } from "styled-components";
// import { Container } from "./components/styles/Container.styled";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// const theme = {
//   colors: {
//     containerOne: "#F2F2F2",
//     containerTwo: "#EAEAEA",
//     containerThree: "#E0E0E0",
//     containerFour: "#D6D6D6",
//   },
// };
function App() {
  return (
    <div className="App">
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;
