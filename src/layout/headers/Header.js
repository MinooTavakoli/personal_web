import React from "react";
import { Card } from "../../components/card";
import { Row, Col } from "../../components/grid";
import aboutIcon from "../../assets/icons/man-1.png";
import resumeIcon from "../../assets/icons/cv-1.png";
import workIcon from "../../assets/icons/working-1.png";
import blogIcon from "../../assets/icons/blog-1.png";
import contactIcon from "../../assets/icons/contact.png";
import "./Header.css";

function Header() {
  return (
    <Card>
      <div className="sidebar-header-wrapper">
        <ul>
          <li className="active">
            <a href="#about-card">
              <img
                src={aboutIcon}
                alt="about-me-pedram-aghaii"
                className="person-icon"
              />
              <div className="link">ABOUT</div>
            </a>
          </li>
          <li className="">
            <a href="#resume-card">
              <img
                src={resumeIcon}
                alt="resume-me-pedram-aghaii"
                className="person-icon"
              />
              <div className="link">RESUME</div>
            </a>
          </li>
          <li className="">
            <a href="#work-card">
              <img
                src={workIcon}
                alt="work-me-pedram-aghaii"
                className="person-icon"
              />
              <div className="link">WORKS</div>
            </a>
          </li>
          <li className="">
            <a href="#blog-card">
              <img
                src={blogIcon}
                alt="blog-me-pedram-aghaii"
                className="person-icon"
              />
              <div className="link">BLOG</div>
            </a>
          </li>
          <li className="">
            <a href="#contact-card">
              <img
                src={contactIcon}
                alt="contact-me-pedram-aghaii"
                className="person-icon"
              />
              <div className="link">CONTACT</div>
            </a>
          </li>
        </ul>
      </div>
    </Card>
  );
}

export default Header;

// 4ca5c6   #0D62D7  83d5fb
