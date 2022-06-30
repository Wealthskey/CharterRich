import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import emailjs from "emailjs-com";
import ImgAbout from "./img/about1.png";
import ImgProject from "./img/project1.png";
import ImgLockDown from "./img/lockdown2.png";
import "./styles/About.scss";

const About = () => {
  function sendEmail(e) {
    e.preventDefault();
    const result = window.confirm("Are you sure to contact us ?");
    if (result) {
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
      window.alert("Your message is sended");
      e.target.reset();
    } else {
      document.getElementById("name").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("email").value = "";
    }
  }
  return (
    <>
      <Navbar />
      <div className="about-intro">
        <p className="title">About Our Company</p>
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
          <form onSubmit={sendEmail} className="inputContainer">
            <label for="name">Name*</label>
            <input type="text" id="name" name="name" required />
            <br />

            <label for="phone">Phone*</label>
            <input type="text" id="phone" name="phone" required />
            <br />
            <label for="email">Email*</label>
            <input type="email" id="email" name="email" required />
            <br />
            <button type="submit" className="send">
              send
            </button>
          </form>
        </div>
        <hr className="divisionLine" />

        <div className="about-project">
          <img id="img-project" src={ImgProject} />
          <div className="project-content">
            <p>
              <em>Project Lock World Down 20</em> is a social project led by our
              company, an initiative with the intention to stop coronavirus'
              transmission around the world by running a worldwide lockdown all
              together the same time, for 20 days.
              <br></br>
              <br></br>
              <br></br>
              Click on the image below to see details:
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
