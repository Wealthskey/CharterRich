import React from "react";
import logo from "./img/finalLogoWhite.png";
import { Link } from "react-router-dom";
import "./styles/Footer.scss";

const Footer = () => {
  return (
    <section className="footer">
      <Link to="/">
        <img src={logo} alt="logo" className="logo" />
      </Link>
      <p className="ftr-info">
        <span>Room 2903, 29/F, Modern Warehouse, </span>
        <span>6 Shing Yip Street, Kwun Tong,</span>
        <span>Kowloon, Hong Kong</span>
        <span>&nbsp;</span>
        <span>(852)12345678</span>
        <span>admin@charterrich.com</span>
      </p>
      <p className="ftr-menu">
        <Link Link to="/CharterRich">
          <span>Home</span>
        </Link>
        <Link to="/shop">
          <span>E-Shop</span>
        </Link>
        <Link to="/project">
          <span>LWD20</span>
        </Link>
        <Link to="/about">
          <span>About us</span>
        </Link>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
      </p>
      <p className="ftr-network">
        <a href="https://facebook.com">
          <span>Facebook</span>
        </a>
        <a href="https://twitter.com">
          <span>Twitter</span>
        </a>
        <a href="https://instagram.com">
          <span>Instagram</span>
        </a>
        <a href="https://Linkedin.com">
          <span>LinkedIn</span>
        </a>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        {/* <span>@2022 Charter Rich Hong Kong Limited, All rights reserved</span> */}
      </p>
    </section>
  );
};

export default Footer;
