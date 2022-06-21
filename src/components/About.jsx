import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import emailjs from "emailjs-com";
import ImgAbout from "./img/about1.png";
import ImgProject from "./img/project1.png";
import ImgLockDown from "./img/lockdown2.png";
import IconWorld from "./img/image 5.png";
import "./styles/About.scss";

const About = () => {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_8r6r47f",
        "template_a40hbxy",
        e.target,
        "s8WrzzF_VKDyXz9El"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <>
      <Navbar />
      <div className="aboutAll">
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
        <div className="contact-form">
          <form onSubmit={sendEmail}>
            <div className="inputContainer">
              <div>
                <label for="name">Name*</label>
                <input type="text" id="name" name="name" />
              </div>
              <div>
                <label for="phone">Phone*</label>
                <input type="text" id="phone" name="phone" />
              </div>
              <div>
                <label for="email">Email*</label>
                <input type="email" id="email" name="email" />
              </div>
            </div>
            <button type="submit" className="send">
              send
            </button>
          </form>
        </div>
        <div className="projectAll">
          <img id="img-project" src={ImgProject} />
          <div className="title">
            <img id="icon-world" src={IconWorld} />
            <h2> &nbsp;&nbsp;Project LWD20</h2>
          </div>
          <div className="content">
            <p>
              Project Lock World Down 20 is a social project led by our company,
              an initiative with the intention to stop coronavirus' transmission
              around the world by running a worldwide lockdown all together the
              same time, for 20 days.
              <br></br>
              <br></br>
              <br></br>
              Please visit our project website to see details:{" "}
              <a href="https://lwd20.org">https://lwd20.org</a>
            </p>
          </div>
          <img id="img-lockdown" src={ImgLockDown} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
