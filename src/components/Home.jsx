import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import IMAGES from "./Images";
import img from "./img/product1a.jpg";

const Home = () => {
  return (
    <div>
      {IMAGES.map((item) => (
        <div key={item.id}>
          <h2>{item.txt}</h2>
          <img src={item.image} />
          <h2>{item.image}</h2>
        </div>
      ))}
    </div>
  );
};

export default Home;
