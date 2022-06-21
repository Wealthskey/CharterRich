import React from "react";
import logo from "./img/finalLogoWhite.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./styles/Navbar.scss";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  const [active, setActive] = useState("nav_menu");
  const navToggle = () => {
    active === "nav_menu"
      ? setActive("nav_menu nav_active")
      : setActive("nav_menu");
  };

  return (
    <div className="nav">
      <Link to="/CharterRich">
        <img src={logo} alt="logo" className="logo" />
      </Link>
      <ul className={active}>
        {/* <li>
            <Link to="/CharterRich">HOME</Link>
          </li> */}
        <li className="nav_item">
          <Link to="/shop">E-SHOP</Link>
        </li>
        {/* <li>
            <Link to="/project">LWD20</Link>
          </li> */}
        <li className="nav_item">
          <Link to="/about">ABOUT</Link>
        </li>
      </ul>
      <div onClick={navToggle} className="nav_toggler">
        <GiHamburgerMenu />
      </div>
    </div>
  );
};

export default Navbar;
