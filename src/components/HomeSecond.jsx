import React from "react";
import rewarding from "./img/img2.png";
import rewarding_logo from "./img/icon 2.png";
import "./styles/Home.scss";
const HomeSecond = () => {
  return (
    <div className="home-second">
      <hr />
      <img className="RD_picture" src={rewarding} alt="rewarding" />
      <img className="RD_logo" src={rewarding_logo} alt="rewarding" />
      <p>Retail Incentive Program Rewarding Customers</p>
      <ul>
        <li>Enable loyalty customers to earn blockchain-powered ShareWons</li>
        <li>Enable users to purchase, earn and use ShareWon</li>
        <li>Incentive</li>
      </ul>
    </div>
  );
};

export default HomeSecond;
