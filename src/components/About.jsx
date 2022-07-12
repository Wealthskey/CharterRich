import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import emailjs from "emailjs-com";
import ImgAbout from "./img/about1.png";
import ImgProject from "./img/project1.png";
import ImgLockDown from "./img/lockdown2.png";
import { useTranslation } from "react-i18next";
import "./styles/About.scss";
const About = () => {
  const { t } = useTranslation(["about"]);

  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_gs2jfh8",
        "template_m6gmmtn",
        e.target,
        "SARQvDPwSzwpFrxAq"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    window.alert(t("message_alert"));
    e.target.reset();
  }
  return (
    <>
      <Navbar />
      <div className="about-intro">
        <p className="title">{t("title")}</p>
        <img id="img-about" src={ImgAbout} />
        <div className="content-about">
          <p>
            <em>Charter Rich </em>
            {t("intro")}
          </p>
        </div>

        <div className="contact-form">
          <form onSubmit={sendEmail} className="inputContainer">
            <label for="name">{t("name")}*</label>
            <input type="text" id="name" name="name" required />
            <br />

            <label for="phone">{t("phone")}*</label>
            <input type="text" id="phone" name="phone" required />
            <br />
            <label for="email">Email*</label>
            <input type="email" id="email" name="email" required />
            <br />
            <button type="submit" className="send">
              {t("send")}
            </button>
          </form>
        </div>
        <hr className="divisionLine" />

        <div className="about-project">
          <img id="img-project" src={ImgProject} />
          <div className="project-content">
            <p>
              <em>Project Lock World Down 20</em>
              {t("intro_2")}
              <br></br>
              <br></br>
              <br></br>
              {t("intro_2_2")}
            </p>
          </div>
          <a href="https://lwd20.org">
            <img id="img-lockdown" src={ImgLockDown} />
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
