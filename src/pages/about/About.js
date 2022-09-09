import React from "react";
import deepLearningIcon from "../../assets/icons/deep-learning-2.png";
import linuxIcon from "../../assets/icons/linux.png";
import systemIcon from "../../assets/icons/system.png";
import solutionIcon from "../../assets/icons/solution.png";
import vmwareIcon from "../../assets/icons/vmware.png";
import "./About.css";
import { Card } from "../../components/card";

function About() {
  return (
    <Card>
    <div dir="ltr" className="card-inner animated active" id="about-card">
      <div className="card-wrap">
        <div className="content">
          <div className="title">
            <div className="first-word-wrapper">
              <div className="first-word">About</div> <div> Me </div>
            </div>
          </div>
        </div>

        <div className="row about-title-responsive">
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
                  src={systemIcon}
                  alt="deep Learning Icon"
                />
              </div>
              <div className="name">
                <span>Operation Systems </span>
              </div>
              <div className="desc-service-wrapper">
                <div className="desc-service">
                  <p>
                    Ensuring the highest level of availability, performance and
                    security Analysis and engineering of computer systems
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
                  src={linuxIcon}
                  alt="deep Learning Icon"
                />
              </div>
              <div className="name">
                <span>Linux Systems </span>
              </div>
              <div className="desc-service-wrapper">
                <div className="desc-service">
                  <p>
                    Proficient in Linux stacks, Definition and implementation of
                    best practices and standards, Design, build and maintain
                    Linux-based services at HPC scale operating systems and
                    applications to increase performance and reliability
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
                    Analysis of existing software for product development and
                    Creating strategic technical vision and solutions
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
                  src={vmwareIcon}
                  alt="deep Learning Icon"
                />
              </div>
              <div className="name">
                <span>VMware Engineer</span>
              </div>
              <div className="desc-service-wrapper">
                <div className="desc-service">
                  <p>
                    Designing and implementing VMware solutions, troubleshooting
                    VMware environment problems. Using VMware to connect to the
                    network and clouds
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="clear"></div>
      </div>
    </div>
    </Card>
  );
}

export default About;
