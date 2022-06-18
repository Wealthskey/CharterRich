import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import product_card from "./Products";
import "./styles/Shop.scss";
import SimpleImageSlider from "react-simple-image-slider";
const Shop = () => {
  const listItems = product_card.map((item) => (
    <div className="card" key={item.id}>
      <section className="card_container">
        <div className="card_imgBox">
          <SimpleImageSlider
            className="card_img"
            width={400}
            height={400}
            images={item.thumb}
            showBullets={true}
            showNavs={true}
          />
          <div className="card_info">
            <h2>{item.product_name}</h2>
            <p>{item.description}</p>
            <h1 className="price">
              {item.price}
              {/* <span>{item.currency}</span> */}
            </h1>
          </div>
        </div>
      </section>
    </div>
  ));
  return (
    <>
      <Navbar />
      <div className="shopAll">
        <div className="title">
          <h2 className="shopTitle">Charter Rich's E-Shop</h2>
        </div>
        <div className="card-list">{listItems}</div>
      </div>
      <Footer />
    </>
  );
};

export default Shop;
