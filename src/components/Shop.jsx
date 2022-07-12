import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useTranslation } from "react-i18next";
import Img_shop from "./img/shop1.jpg";
import product_card from "./Products";
import "./styles/Shop.scss";
import SimpleImageSlider from "react-simple-image-slider";
const Shop = () => {
  const { t } = useTranslation(["shop"]);
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
                {t("shopNow")}
                &gt;
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
        <h2 className="title">{t("title")}</h2>
        <img src={Img_shop} id="img_shop" />
        <h2 className="shopIntro">{t("intro")}</h2>
        <div className="card-list">{listItems}</div>
      </div>
      <Footer />
    </>
  );
};

export default Shop;
