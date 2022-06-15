import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import product_card from "./Products";
import "./styles/Shop.scss";
import SimpleImageSlider from "react-simple-image-slider";
const Shop = () => {
  const listItems = product_card.map((item) => (
    <div className="card" key={item.id}>
      <div className="card_header">
        <div className="card_img">
          <SimpleImageSlider
            width={600}
            height={500}
            images={item.thumb}
            showBullets={true}
            showNavs={true}
          />
          {/* <img src={require("" + item.thumb)} /> */}
        </div>
        <h2>{item.product_name}</h2>
        <p>{item.description}</p>
        <p className="price">
          {item.price}
          <span>{item.currency}</span>
        </p>
      </div>
    </div>
  ));
  return (
    <div className="shopAll">
      <Navbar />
      <div className="title">
        <h2 className="shopTitle">Charter Rich's E-Shop</h2>
      </div>
      <div>{listItems}</div>
      <Footer />
    </div>
  );
};

export default Shop;
