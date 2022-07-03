import React from "react";
import { Link } from "react-router-dom";
import "./styles/Footer.scss";
import { MdLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <section className="footer">
      <p className="ftr-info">
        <span className="info_box">
          <i className="info_icon">
            <MdLocationOn />
          </i>
          Room 2903, 28/F, Modern Warehouse, 6 Shing Yip Street, Kwun Tong,
          Kowloon, Hong Kong
        </span>

        <span className="info_box">
          <i className="info_icon">
            <FaPhoneAlt />
          </i>
          (852)94731067
        </span>
        <span className="info_box">
          <i className="info_icon">
            <MdEmail />
          </i>
          charterrich2@gmail.com
        </span>
        <span className="info_copyright">
          @ 2022 Charter Rich Hong Kong Limited, All rights reserved
        </span>
      </p>
      <p className="ftr-menu">
        <Link Link to="/CharterRich">
          <span>Home</span>
        </Link>
        <Link to="/shop">
          <span>E-Shop</span>
        </Link>
        <Link to="/about">
          <span>About</span>
        </Link>
      </p>
    </section>
  );
};

export default Footer;
