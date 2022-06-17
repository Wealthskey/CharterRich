import React from "react";
import consultancy from "./img/img3.png";
import consultancy_logo from "./img/icon 3.png";
const HomeThird = () => {
  return (
    <div className="home-third">
      <hr />
      <img className="TC_picture" src={consultancy} alt="consultancy" />
      <img className="TC_logo" src={consultancy_logo} alt="consultancy" />
      <p>Digital Technology Consultancy</p>
      <ul>
        <li>Offer digital solutions to SMEs for digital transformation</li>
        <li>
          Sector rich expertise especially in the areas of trading, property,
          human resources and healthcare
        </li>
        <li>
          Provide IT consultation leading to business model transformation,
          process automation, and productivity improvements.
        </li>
      </ul>
    </div>
  );
};

export default HomeThird;
