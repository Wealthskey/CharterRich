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
function Home() {
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
      <div className="home-first">
        <img src={partner} />
        <div className="description">
          <p>
            We provide the best digital technology consultancies and tools for
            business process improvements and business referral incentives,
            particularly in the trading, property, human resources and
            healthcare industries.
          </p>
          <p>
            We offer our own eShop for personal care and healthcare products. Go
            to eShop here directly.
          </p>
        </div>
      </div>
      <div className="home-second">
        <p className="title">Why Charter Rich?</p>
        <div className="reason-car">
          <div className="car1">
            <img src={car1} />
            <p className="reason">Save Time</p>
          </div>
          <div className="car2">
            <img src={car2} />
            <p className="reason">Save Cost</p>
          </div>
          <div className="car3">
            <img src={car3} />
            <p className="reason">Proven Technologies</p>
          </div>
        </div>
      </div>
      <div className="home-third">
        <p className="title">Leave your digital solution to us</p>
        <div className="solution">
          <div className="image-left">
            <img src={solution1} />
            <div className="explain">
              <p className="explain-title">
                Business Process Improvement through Innovations
              </p>
              <ul className="explain-content">
                <li>
                  Productivity and business process improvement through our
                  innovative technologies
                </li>
                <li>Customized IT applications and e-shop developments</li>
                <li>
                  Customer Relationship Management tools for experience
                  enhancement
                </li>
              </ul>
            </div>
          </div>
          <div className="image-right">
            <div className="explain">
              <p className="explain-title">
                Innovative Tools for Business Referrals
              </p>
              <ul className="explain-content">
                <li>
                  We offer a reward system enabling users to earn loyalty points
                  powered by ShareWon, our blockchain wallet
                </li>
                <li>
                  Users earn ShareWons by sharing an item leading to a paid
                  transaction
                </li>
                <li>
                  Rewarding customers with their loyalties and actions in
                  referring businesses
                </li>
              </ul>
            </div>
            <img src={solution2} />
          </div>
          <div className="image-left">
            <img src={solution3} />
            <div className="explain">
              <p className="explain-title">Digital Technology Consultancy</p>
              <ul className="explain-content">
                <li>
                  We offer digital solutions to SMEs for digital transformation
                </li>
                <li>
                  Sector rich expertise especially in the areas of trading,
                  property, human resources and healthcare
                </li>
                <li>
                  Provide IT consultation leading to business process
                  improvement and customer engagement enhancement
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="home-final">
        <p className="title">ShareWon Project</p>
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
          <p className="sw_description">
            <span>ShareWon</span> is the digital token powered by blockchain.
            <p>
              The concept of ShareWon is that users earn after they pay and
              share leading to another paid transaction.
            </p>
            <p>
              This is an excellent customer reward system and a business
              referral system offered to small and medium enterprises, with
              innovations in the digital transformation.
            </p>
          </p>
        </div>
        <div className="final-second">
          <p>Contact our consultants for a demo and solution discussions!</p>
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
        </div>
      </div>
    </>
  );
}

export default Home;
