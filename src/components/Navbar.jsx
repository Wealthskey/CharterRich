import React from "react";
import logo from "./img/finalLogoWhite.png";
import { Link } from "react-router-dom";
import "./styles/Navbar.scss";
const Navbar = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={logo} alt="logo" className="logo" />
      </Link>
      <nav className="item">
        <ul className="ul">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/shop">E-SHOP</Link>
          </li>
          <li>
            <Link to="/project">LWD20</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
