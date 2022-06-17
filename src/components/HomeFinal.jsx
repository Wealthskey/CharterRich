import React from "react";
import sharewons from "./img/sharewons.png";
import emailjs from "emailjs-com";
const HomeFinal = () => {
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
          <span>ShareWon</span> is the digital token powered by blockchain. The
          concept of ShareWon is that users earn after they pay and share
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
  );
};

export default HomeFinal;
