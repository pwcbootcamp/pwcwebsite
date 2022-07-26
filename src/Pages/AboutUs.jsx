import React from "react";
import Team1 from "./images/team1.jpg";
import Team2 from "./images/team2.jpg";
import Team3 from "./images/team3.jpg";

const AboutUs = () => {
  return (
    <section className="container">
      <h2 style={{ textAlign: "center" }}>Our Team</h2>
      <div className="row">
        <div className="column">
          <div className="card">
            <img src={Team1} alt="Jane" style={{ width: "100%" }} />
            <div className="container">
              <h2>Taiwo Oyedele - PwC</h2>
              <p className="title">Director - Africa Tax Leader</p>
              <p>
                Taiwo is the Fiscal Policy Partner and Africa Tax Leader at PwC.
                He is the Chairman of the COVID-19 intervention committee for
                PwC West Africa.
              </p>
              <p>oyedeletaiwo@pwc.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src={Team2} alt="Mike" style={{ width: "100%" }} />
            <div className="container">
              <h2>Mike Ross</h2>
              <p className="title">Director</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>mike@example.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src={Team3} alt="John" style={{ width: "100%" }} />
            <div className="container">
              <h2>Taiwo Oyedele</h2>
              <p className="title">Designer</p>
              <p>
                PwC Nigeria provides industry-focused assurance, advisory and
                tax services to public, private and government clients in all
                markets.
              </p>
              <p>john@example.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
