import React from "react";
import blockchain from "./img/img1.png";
import "./styles/Home.scss";
import blockchain_icon from "./img/icon 1.png";
import rewarding from "./img/img2.png";
import rewarding_logo from "./img/icon 2.png";
import consultancy from "./img/img3.png";
import consultancy_logo from "./img/icon 3.png";
import sharewons from "./img/sharewons.png";
import emailjs from "emailjs-com";
const Home = () => {
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
      <div className="home-first">
        <img className="BC_picture" src={blockchain} alt="blockchain" />
        <img className="BC_logo" src={blockchain_icon} alt="blockchain" />
        <p>Business Innovation by Blockchain</p>
        <ul>
          <li>
            A reward system enabling users to earn loyalty points (crypto)
            powered by ShareWon
          </li>
          <li>
            Users earn ShareWons by sharing an item leading to a paid
            transaction
          </li>
          <li>
            A business referral ecosystem with innovation in digital technology
          </li>
        </ul>
      </div>
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
      <div className="home-final">
        <hr />
        <div className="final-first">
          <div className="box">
            <img src={sharewons} alt="sharewons" />
            <p>
              Click on the button to download the <span>Sharewon Wallet!</span>
            </p>
            <a
              href="https://deploygate.com/distributions/843b855713892a6ad7c570fb999f4a3d96ca952e"
              target="_blank"
            >
              <button className="download">Download</button>
            </a>
          </div>
          <p className="description">
            <span>ShareWon</span> is the digital token powered by blockchain.
            The concept of ShareWon is that users earn after they pay and share
            leading to another paid transaction. This is an excellent customer
            reward system and a business referral system offered to small and
            medium enterprises, with innovations in the digital transformation.
          </p>
        </div>
        <div className="final-second">
          <p>Contact our consultants for a demo and solution discussions!</p>
          <div className="contact-form">
            <form onSubmit={sendEmail}>
              <div className="inputContainer-name">
                <label for="name">Name*</label>
                <input type="text" id="name" name="name" />
              </div>
              <div className="inputContainer-phone">
                <label for="phone">Phone*</label>
                <input type="text" id="phone" name="phone" />
              </div>
              <div className="inputContainer-email">
                <label for="email">Email*</label>
                <input type="email" id="email" name="email" />
              </div>
              <button type="submit" className="send">
                send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
