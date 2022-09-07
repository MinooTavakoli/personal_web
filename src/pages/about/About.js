import React from "react";
import deepLearningIcon from "../../assets/icons/deep-learning-2.png";
import "./About.css";

function About() {
  return (
    <div className="card-inner animated active" id="about-card">
      <div className="card-wrap">
        <div className="content">
          <div className="title">
            <div className="first-word-wrapper">
              <div className="first-word">About</div> <div> Me </div>
            </div>
          </div>
        </div>

        <div className="row" style={{ position: "relative" }}>
          {/* <div className="line-center" /> */}
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v ltr-section">
            <div className="text-box">
              <p>
                I am Pedram Aghaei, Infrastructure Team Lead from IRAN, Tehran.
                I have rich experience in Network and building and
                customization, also I am good at Datacenter. I love to talk with
                you about our unique.
              </p>
            </div>
          </div>
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v rtl-section">
            <div className="info-list">
              <ul>
                <li>
                  <strong>Age</strong> 36
                </li>
                <li>
                  <strong>Nationality</strong> Iranian
                </li>
                <li>
                  <strong>Freelance</strong> Available
                </li>
                <li>
                  <strong>Address</strong> Iran, Tehran
                </li>
              </ul>
            </div>
          </div>
          <div className="clear"></div>
        </div>
      </div>

      <div className="content services">
        {/* <div className="line-center-service" /> */}

        <div className="content">
          <div className="title">
            <div className="first-word-wrapper">
              <div className="first-word">My</div> <div> Services </div>
            </div>
          </div>
        </div>

        <div className="row service-items border-line-v custom-row-grid">
          <div className="col col-d-6 col-t-6 col-m-12 border-line-h">
            <div className="service-item">
              <div className="icon">
                <img
                  className="service-icon"
                  src={deepLearningIcon}
                  alt="deep Learning Icon"
                />
              </div>
              <div className="name">
                <span>Operation Systems </span>
              </div>
              <div className="desc-service-wrapper">
                <div className="desc-service">
                  <p>
                    Modern and mobile-ready website that will help you reach all
                    of your marketing.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col col-d-6 col-t-6 col-m-12 border-line-h">
            <div className="service-item">
              <div className="icon">
                <img
                  className="service-icon"
                  src={deepLearningIcon}
                  alt="deep Learning Icon"
                />
              </div>
              <div className="name">
                <span>Linux Systems </span>
              </div>
              <div className="desc-service-wrapper">
                <div className="desc-service">
                  <p>
                    Music copying, writing, creating, transcription, arranging
                    and composition services.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col col-d-6 col-t-6 col-m-12 border-line-h">
            <div className="service-item">
              <div className="icon">
                <img
                  className="service-icon"
                  src={deepLearningIcon}
                  alt="deep Learning Icon"
                />
              </div>
              <div className="name">
                <span>IT Solution Architect</span>
              </div>
              <div className="desc-service-wrapper">
                <div className="desc-service">
                  <p>
                    Advertising services include television, radio, print, mail,
                    and web apps.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col col-d-6 col-t-6 col-m-12 border-line-h">
            <div className="service-item">
              <div className="icon">
                <img
                  className="service-icon"
                  src={deepLearningIcon}
                  alt="deep Learning Icon"
                />
              </div>
              <div className="name">
                <span>VMware Engnieer</span>
              </div>
              <div className="desc-service-wrapper">
                <div className="desc-service">
                  <p>
                    Developing memorable and unique mobile android, ios and
                    video games.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="clear"></div>
      </div>
    </div>
  );
}

export default About;
