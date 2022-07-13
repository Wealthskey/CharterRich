import React from "react";
import logo from "./img/finalLogoWhite.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./styles/Navbar.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const Navbar = () => {
  const { i18n, t } = useTranslation(["common"]);
  //not necessary
  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18next.changeLanguage("en");
    }
  }, []);
  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
    console.log(e.target.value);
  };

  const [active, setActive] = useState("nav_menu");
  const navToggle = () => {
    active === "nav_menu"
      ? setActive("nav_menu nav_active")
      : setActive("nav_menu");
  };
  return (
    <>
      <div className="nav">
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <ul className={active}>
          <li className="nav_item">
            <Link to="/shop">{t("shop")}</Link>
          </li>
          <li className="nav_item">
            <Link to="/about">{t("about")}</Link>
          </li>
          <div className="vl"></div>
          <li className="nav_language">
            <select
              onChange={handleLanguageChange}
              value={localStorage.getItem("i18nextLng")}
            >
              <option value="en">Eng</option>
              <option value="cn">简体中文</option>
              <option value="hk">繁體中文</option>
            </select>
          </li>
        </ul>

        <div onClick={navToggle} className="nav_toggler">
          <GiHamburgerMenu />
        </div>
      </div>
      <div className="nav_fixed"></div>
    </>
  );
};

export default Navbar;
