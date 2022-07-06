import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Img_shop from "./img/shop1.jpg";
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
            width={"28vw"}
            height={"32vw"}
            images={item.thumb}
            showNavs={true}
            navSize={15}
            navMargin={10}
          />
          <div className="card_info">
            <h2>
              {item.product_name}
              {/* &nbsp; ({item.description}) */}
            </h2>
            {/* <h1 className="price">
              {item.price} */}
            {/* <span>{item.currency}</span> */}
            {/* </h1> */}

            <button className="card_shopNow">
              <a href="https://charterrich-eshop.company.site/">
                SHOP NOW &gt;
              </a>
            </button>
          </div>
        </div>
      </section>
    </div>
  ));
  return (
    <>
      <Navbar />
      <div className="shopAll">
        <h2 className="title">Charter Rich's E-Shop</h2>
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
