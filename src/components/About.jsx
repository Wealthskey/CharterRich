import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ImgAbout from "./img/about1.png";
import "./styles/About.scss";

const About = () => {
  return (
    <div className="aboutAll">
      <Navbar />
      <img id="img-about" src={ImgAbout} />
      <div className="content-about">
        <p>
          <em>Charter Rich </em>is a digital technology solution company
          providing innovative solutions to small and medium enterprises
          especially in the e-commerce, trading, property and healthcare
          sectors. Established in 1993 and headquartered in Hong Kong, the
          company is leading in digital technology and business model
          innovations, as well as technology consultations for business.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
