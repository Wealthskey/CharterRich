import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Img_shop from "./img/shop1.png";
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
            <h2>{item.product_name} </h2>

            {/* <p>{item.description}</p> */}
            {/* <h1 className="price">
              {item.price} */}
            {/* <span>{item.currency}</span> */}
            {/* </h1> */}
            <a
              href="https://charterrich-eshop.company.site/"
              className="card_shopNow"
            >
              SHOP NOW &gt;{" "}
            </a>
          </div>
        </div>
      </section>
    </div>
  ));
  return (
    <>
      <Navbar />
      <div className="shopAll">
        <h2 className="shopTitle">Charter Rich's E-Shop</h2>
        <img src={Img_shop} id="img_shop" />
        <h2 className="shopIntro">
          Explore our full lifestyle lines of skincare, bodycare, healthcare and
          fragrance online. The collection of your everyday use and health
          journey.
        </h2>
        <div className="card-list">{listItems}</div>
      </div>
      <Footer />
    </>
  );
};

export default Shop;
