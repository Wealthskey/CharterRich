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
          <MdLocationOn style={{ marginLeft: "-20px" }} />
          &nbsp; Room 2903, 28/F, Modern Warehouse,<br></br>6 Shing Yip Street,
          Kwun Tong, Kowloon, Hong Kong
        </span>
        <span>&nbsp;</span>
        <span className="info_box">
          <FaPhoneAlt style={{ marginLeft: "-20px" }} />
          &nbsp; (852)12345678
        </span>
        <span className="info_box">
          <MdEmail style={{ marginLeft: "-20px" }} />
          &nbsp; admin@charterrich.com
        </span>
      </p>
      <p className="ftr-menu">
        <Link Link to="/CharterRich">
          <span>Home</span>
        </Link>
        <Link to="/shop">
          <span>E-Shop</span>
        </Link>
        {/* <Link to="/project">
          <span>LWD20</span>
        </Link> */}
        <Link to="/about">
          <span>About</span>
        </Link>
        <span>&nbsp;</span>

        <span>@2022 Charter Rich Hong Kong Limited, All rights reserved</span>
      </p>
    </section>
  );
};

export default Footer;
