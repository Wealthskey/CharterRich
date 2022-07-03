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
    window.alert("Your message is sent!");
    e.target.reset();
  }
  return (
    <>
      <section className="home-intro">
        <img src={partner} />
        <div className="intro-text">
          <p>
            We provide the best digital technology consultancies and tools for
            business process improvements and business referral incentives,
            particularly in the trading, property, human resources and
            healthcare industries.
            <br></br>
            <br></br>
            We offer our own E-Shop for personal care and healthcare products.
            Go to E-Shop{" "}
            <a href="https://charterrich-eshop.company.site/">here</a> directly.
          </p>
        </div>
      </section>

      <section className="home-reasons">
        <p className="title">Why Charter Rich?</p>
        <div className="reasons-cards">
          <div className="card">
            <img src={car1} />
            <p className="reason">Save Time</p>
          </div>
          <div className="card">
            <img src={car2} />
            <p className="reason">Save Cost</p>
          </div>
          <div className="card">
            <img src={car3} />
            <p className="reason">Proven Technologies</p>
          </div>
        </div>
      </section>

      <section className="home-features">
        <p className="title">Leave your digital solution to us</p>

        <section className="features-leftImageBanner">
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
        </section>

        <hr className="divisionLine" />

        <section className="features-RightImageBanner">
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
        </section>

        <hr className="divisionLine" />

        <section className="features-leftImageBanner">
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
                Provide IT consultation leading to business process improvement
                and customer engagement enhancement
              </li>
            </ul>
          </div>
        </section>
      </section>

      <section className="home-shareWon">
        <p className="title">ShareWon Project</p>

        <section className="shareWon">
          <div className="shareWon-box">
            <img src={sharewons} alt="sharewon" />
            <a href="https://deploygate.com/distributions/843b855713892a6ad7c570fb999f4a3d96ca952e">
              <button className="download">Download</button>
            </a>
          </div>
          <p className="shareWon-description">
            <span>ShareWon</span> is the digital token powered by blockchain.
            <br></br> <br></br>
            The concept of ShareWon is that users earn after they pay and share
            leading to another paid transaction.
            <br></br> <br></br>
            This is an excellent customer reward system and a business referral
            system offered to small and medium enterprises, with innovations in
            the digital transformation.
          </p>
        </section>

        <section className="home-contact">
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
        </section>
      </section>
    </>
  );
}

export default Home;
