import React from "react";
import blockchain from "./img/img1.png";
import "./styles/Home.scss";
import blockchain_icon from "./img/icon 1.png";
const HomeFirst = () => {
  return (
    <div className="home-first">
      <img className="BC_picture" src={blockchain} alt="blockchain" />
      <img className="BC_logo" src={blockchain_icon} alt="blockchain" />
      <p>Business Innovation by Blockchain</p>
      <ul>
        <li>
          A reward system enabling users to earn loyalty points (crypto) powered
          by ShareWon
        </li>
        <li>
          Users earn ShareWons by sharing an item leading to a paid transaction
        </li>
        <li>
          A business referral ecosystem with innovation in digital technology
        </li>
      </ul>
    </div>
  );
};

export default HomeFirst;
