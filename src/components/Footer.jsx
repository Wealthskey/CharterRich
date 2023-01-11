import React from "react";
import { Link } from "react-router-dom";
import "./styles/Footer.scss";
import { MdLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation(["common"]);
  return (
    <section className="footer">
      <p className="ftr-info">
        <span className="info_box">
          <i className="info_icon">
            <MdLocationOn />
          </i>
          Room 2708, 27/F, Metropolis Tower, 10 Metropolis Drive, Hung Hom, Hong
          Kong
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
          @ Charter Rich, All rights reserved
        </span>
      </p>
      <p className="ftr-menu">
        <Link Link to="/">
          <span>{t("home")}</span>
        </Link>
        <Link to="/shop">
          <span>{t("shop")}</span>
        </Link>
        <Link to="/about">
          <span>{t("about")}</span>
        </Link>
      </p>
    </section>
  );
};

export default Footer;
