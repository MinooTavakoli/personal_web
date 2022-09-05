import React from "react";
import { Card } from "../../components/card";
import profileImage from "../../assets/images/profileImage.jpg";
import linkedinIcon from "../../assets/icons/linkedin-1.png";
import githubIcon from "../../assets/icons/github-3.png";
import telegramIcon from "../../assets/icons/telegram.png";
import { Col, Row } from "../../components/grid";
import "./Profile.css";

function Profile() {
  return (
    <React.Fragment>
      <div className="card-started"> </div>
      <Card style={{ overflow: "hidden" }}>
        <Row>
          <Col>
            <div className="profile-component">
              <div class="profile-slide">
                <div className="profile-container-wrapper">
                  <div className="profile-image-wrapper">
                    <img
                      src={profileImage}
                      alt="profile-pedram-aghaii"
                      className="profile-image"
                    />
                  </div>
                </div>
              </div>
              <div className="profile-info-wrapper">
                <div className="profile-info-details">
                  <div className="title-name">PEDRAM AGHAII</div>
                  <div className="title-job">Infrastructure Team Lead</div>
                  <div dir="ltr" className="profile-info-description">
                    Hello! I’m Pedam Aghaii. Senior Web Developer with over 13
                    years of experience specializing in front end development.
                    Experienced with all stages of the development cycle for
                    dynamic web projects.Having an in-depth knowledge including
                    advanced HTML5, CSS, CSS3, SASS, LESS, JSON, XML, Java,
                    JavaScript, JQuery, Angular JS. Strong background in
                    management and leadership.
                  </div>
                  <div className="social-icon-wrapper">
                    <div className="social-icon-linkedin-wrapper">
                      <img
                        src={linkedinIcon}
                        alt="socail-icon-linkedin"
                        className="social-icon-linkedin"
                      />
                    </div>
                    <div className="social-icon-github-wrapper">
                      <img
                        src={githubIcon}
                        alt="social-icon-github"
                        className="social-icon-github"
                      />
                    </div>

                    <div className="social-icon-telegram-wrapper">
                      <img
                        src={telegramIcon}
                        alt="social-icon-telegram"
                        className="social-icon-telegram"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Card>
    </React.Fragment>
  );
}

export default Profile;
