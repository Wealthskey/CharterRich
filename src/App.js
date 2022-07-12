import { Suspense } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import "./App.scss";

function App() {
  return (
    <Suspense fallback={null}>
      <div className="App">
        <Navbar />
        <Home />
        <Footer />
      </div>
    </Suspense>
  );
}

export default App;
