import React from "react";
import "./styles/Home.scss";
import partner from "./img/banner.png";
import car1 from "./img/car1.png";
import car2 from "./img/car2.png";
import car3 from "./img/car3.png";
import solution1 from "./img/solution1.png";
import solution2 from "./img/solution2.png";
import solution3 from "./img/solution3.png";
import sharewons from "./img/sharewons.png";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";
function Home() {
  const { t } = useTranslation(["home"]);

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
      <section className="home-intro">
        <img src={partner} />
        <div className="intro-text">
          <p>
            {t("text_1")}
            <br></br>
            <br></br>
            {t("text_2")}
            <a href="https://charterrich-eshop.company.site/">
              {t("here")}
            </a>{" "}
            {t("directly")}.
          </p>
        </div>
      </section>

      <section className="home-reasons">
        <p className="title">{t("title_1")}</p>
        <div className="reasons-cards">
          <div className="card">
            <img src={car1} />
            <p className="reason">{t("reason_1")}</p>
          </div>
          <div className="card">
            <img src={car2} />
            <p className="reason">{t("reason_2")}</p>
          </div>
          <div className="card">
            <img src={car3} />
            <p className="reason">{t("reason_3")}</p>
          </div>
        </div>
      </section>

      <section className="home-features">
        <p className="title">{t("title_2")}</p>

        <section className="features-leftImageBanner">
          <img src={solution1} />
          <div className="explain">
            <p className="explain-title">{t("exp_title_1")}</p>
            <ul className="explain-content">
              <li>{t("exp_text_1_1")}</li>
              <li>{t("exp_text_1_2")}</li>
              <li>{t("exp_text_1_3")}</li>
            </ul>
          </div>
        </section>

        <hr className="divisionLine" />

        <section className="features-RightImageBanner">
          <div className="explain">
            <p className="explain-title">{t("exp_title_2")}</p>
            <ul className="explain-content">
              <li>{t("exp_text_2_1")}</li>
              <li>{t("exp_text_2_2")}</li>
              <li>{t("exp_text_2_3")}</li>
            </ul>
          </div>
          <img src={solution2} />
        </section>

        <hr className="divisionLine" />

        <section className="features-leftImageBanner">
          <img src={solution3} />
          <div className="explain">
            <p className="explain-title">{t("exp_title_3")}</p>
            <ul className="explain-content">
              <li>{t("exp_text_3_1")}</li>
              <li>{t("exp_text_3_2")}</li>
              <li>{t("exp_text_3_3")}</li>
            </ul>
          </div>
        </section>
      </section>

      <section className="home-shareWon">
        <p className="title">{t("title_3")}</p>
        <section className="shareWon">
          <div className="shareWon-box">
            <img src={sharewons} alt="sharewon" />
            <a href="https://deploygate.com/distributions/843b855713892a6ad7c570fb999f4a3d96ca952e">
              <button className="download">{t("download")}</button>
            </a>
          </div>
          <p className="shareWon-description">
            <span>ShareWon</span> {t("text_3")}
            <br></br> <br></br>
            {t("text_4")}
            <br></br> <br></br>
            {t("text_5")}
          </p>
        </section>

        <section className="home-contact">
          <p>{t("text_6")}</p>
          <div className="contact-form">
            <form onSubmit={sendEmail} className="inputContainer">
              <label for="name">{t("name")}*</label>
              <input type="text" id="name" name="name" required />
              <br />
              <label for="phone">{t("phone")}*</label>
              <input type="text" id="phone" name="phone" required />
              <br />
              <label for="email">{t("email")}*</label>
              <input type="email" id="email" name="email" required />
              <br />
              <button type="submit" className="send">
                {t("send")}
              </button>
            </form>
          </div>
        </section>
      </section>
    </>
  );
}

export default Home;
