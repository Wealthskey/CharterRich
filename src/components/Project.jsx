import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ImgProject from "./img/project1.png";
import ImgLockDown from "./img/lockdown2.png";
import IconWorld from "./img/image 5.png";
import "./styles/Project.scss";

const Project = () => {
  return (
    <div className="projectAll">
      <Navbar />
      <img id="img-project" src={ImgProject} />
      <div className="title">
        <img id="icon-world" src={IconWorld} />
        <h2> &nbsp;&nbsp;Project LWD20</h2>
      </div>
      <div className="content">
        <p>
          Project Lock World Down 20 is a social project led by our company, an
          initiative with the intention to stop coronavirus' transmission around
          the world by running a worldwide lockdown all together the same time,
          for 20 days.
          <br></br>
          <br></br>
          <br></br>
          Please visit our project website to see details:{" "}
          <a href="https://lwd20.org">https://lwd20.org</a>
        </p>
      </div>
      <img id="img-lockdown" src={ImgLockDown} />
      <Footer />
    </div>
  );
};

export default Project;
