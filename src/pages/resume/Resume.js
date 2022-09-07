import React from "react";
import deepLearningIcon from "../../assets/icons/deep-learning-2.png";
import suitcaseIcon from "../../assets/icons/suitcase-1.png";
import educationIcon from "../../assets/icons/education.png";
import loptopIcon from "../../assets/icons/laptop-1.png";
import flagIcon from "../../assets/icons/flag.png";
import codeIcon from "../../assets/icons/coding-1.png";
import skillIcon from "../../assets/icons/skills-1.png";
import Carousel from "../../components/carousel/Carousel";
import images from "../../components/carousel/Images";

import "./Resume.css";

function Resume() {
  return (
    <div className="card-inner animated active" id="about-card">
      <div className="card-wrap"></div>
      <div className="content services">
        {/* <div className="line-center-service" /> */}
        <div className="content">
          <div className="title">
            <div className="first-word-wrapper">
              <div className="first-word">R</div> <div>esume </div>
            </div>
          </div>
        </div>
        <div className="row service-items border-line-v custom-row-grid">
          <div className="col col-d-6 col-t-6 col-m-12 border-line-h-resume">
            <div className="service-item-resume">
              <div className="info-list-resume">
                <ul>
                  <li>
                    <img
                      className="service-icon"
                      src={suitcaseIcon}
                      alt="deep Learning Icon"
                    />
                    <div
                      style={{
                        padding: " 0 16px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      EXPERIENCE
                    </div>
                  </li>
                </ul>
              </div>

              <div className="desc-service-wrapper-resume">
                <div
                  style={{
                    padding: "2px 8px",
                    margin: "16px 0 4px 0",
                    borderRadius: "6px",
                    border: "1px solid #0856c1",
                    color: "#0856c1",
                    height: "26px",
                    width: "34%",
                    fontSize: "15px",
                  }}
                >
                  <span>2018 July - Present</span>
                </div>
                <div className="desc-service-resume">
                  <p>
                    Led the VMware virtualization and Datacenter and Mange
                    servers branches <br />
                    Provided effectively redesigned DR Solution and vSphere
                    Replication; implemented SRM and administered EMC and
                    Unities series <br />
                    Configure EMC Unity 480 and unity 400 such as fast cache,
                    fast VP <br />
                    Config San Storage HP2000 and MSA 2040 such as pool and lun{" "}
                    <br />
                    Config San Switch EMC 6505 and zone <br />
                    Installed and configure HP servers <br />
                    Installed and lunched active directory such as RO DC and
                    configuring DHCP and DNS FW zone and Reverse zone,GPO etc{" "}
                    <br />
                    Install Accounting Kerio Control <br />
                    Viop Elastix & Issable <br />
                    Configured cisco switch such as 3850, 3750, 2960, Small
                    Business Series Link Aggregation, HSRP, Port Channel and etc{" "}
                    <br />
                    Juniper networks security appliances (SRX Branch).JUNOS
                    operating system <br />
                    Configured Router Cisco & Mikrotik& Juniper & Fortigate{" "}
                    <br />
                    Install Vpn Server Forti Client, Open VPN, openConnect,
                    Kerio VPN, Mikrotik (L2TP&PPTP) <br />
                    Install Monitoring Zabbix, PRTG, OP Manager, Splunk <br />
                    Install Microsoft Exchange 2019 and Proxmox <br />
                    Install KMSNG Kaspersky For Anti Email <br />
                    Install Veeam One <br />
                    Install Veeam Backup , BackupExec, Acronis <br />
                  </p>
                </div>
              </div>

              <div
                className="desc-service-wrapper-resume"
                style={{ position: "relative" }}
              >
                <div
                  style={{
                    padding: "2px 8px",
                    margin: "16px 0 4px 0",
                    borderRadius: "6px",
                    border: "1px solid #eee",
                    color: "#ccc",
                    height: "26px",
                    width: "34%",
                    fontSize: "15px",
                  }}
                  className="btn-customer"
                >
                  <span>April 2016 – July 2018</span>
                </div>
                <div className="desc-service-resume">
                  <p>
                    IT Manager & Information technology consulting at Behnam
                    Charity Org Install
                  </p>
                </div>
              </div>

              <div
                className="desc-service-wrapper-resume"
                style={{ position: "relative" }}
              >
                <div
                  style={{
                    padding: "2px 8px",
                    margin: "16px 0 4px 0",
                    borderRadius: "6px",
                    border: "1px solid #eee",
                    color: "#ccc",
                    height: "26px",
                    width: "34%",
                    fontSize: "15px",
                  }}
                  className="btn-customer"
                >
                  <span>April 2014 – April 2016</span>
                </div>
                <div className="desc-service-resume">
                  <p>
                    IT Manager at Derakhte Sabz Company <br />
                    Installed and configure HP servers <br />
                    April 2012 – April 2014 <br />
                    TECHNICAL SUPPORT ENGINEER at TikoNet Company <br />
                    VMware Specialist | Storage Specialist | Instructor <br />
                  </p>
                </div>
              </div>

              <div
                className="desc-service-wrapper-resume"
                style={{ position: "relative" }}
              >
                <div
                  style={{
                    padding: "2px 8px",
                    margin: "16px 0 4px 0",
                    borderRadius: "6px",
                    border: "1px solid #eee",
                    color: "#ccc",
                    height: "26px",
                    width: "34%",
                    fontSize: "15px",
                  }}
                  className="btn-customer"
                >
                  <span>April 2010 – April 2012</span>
                </div>
                <div className="desc-service-resume">
                  <p>TECHNICAL SUPPORT ENGINEER</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col col-d-6 col-t-6 col-m-12 border-line-h-resume">
            <div className="service-item-resume">
              <div className="info-list-resume">
                <ul>
                  <li>
                    <img
                      className="service-icon"
                      src={educationIcon}
                      alt="deep Learning Icon"
                    />
                    <div
                      style={{
                        padding: " 0 16px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      EDUCATION
                    </div>
                  </li>
                </ul>
              </div>

              <div className="desc-service-wrapper-resume">
                <div
                  style={{
                    padding: "2px 8px",
                    margin: "16px 0 4px 0",
                    borderRadius: "6px",
                    border: "1px solid #eee",
                    color: "#ccc",
                    height: "26px",
                    width: "34%",
                    fontSize: "15px",
                  }}
                >
                  <span>2012 - 2014</span>
                </div>
                <div className="desc-service-resume">
                  <p>
                    Applied Scientific University of Information and
                    Communication Technology
                  </p>
                </div>
              </div>

              <div
                className="desc-service-wrapper-resume"
                style={{ position: "relative" }}
              >
                <div
                  style={{
                    padding: "2px 8px",
                    margin: "16px 0 4px 0",
                    borderRadius: "6px",
                    border: "1px solid #eee",
                    color: "#ccc",
                    height: "26px",
                    width: "34%",
                    fontSize: "15px",
                  }}
                  className="btn-customer"
                >
                  <span>2009 – 2011</span>
                </div>
                <div className="desc-service-resume">
                  <p>Lahijan National University</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card-wrap"></div>
      <div className="content services">
        {/* <div className="line-center-service" /> */}
        <div className="content">
          <div className="title">
            <div className="first-word-wrapper">
              <div className="first-word">My</div> <div> Skills </div>
              <br />
              <div style={{ fontSize: "13px", color: "#a7a7a7" }}>
                Networking & Internetworking: (Microsoft Operating Systems -
                Servers – Services)
              </div>
            </div>
          </div>
        </div>
        <div className="row service-items border-line-v custom-row-grid">
          <div className="col col-d-6 col-t-6 col-m-12 border-line-h-resume">
            <div className="service-item-resume">
              <div className="info-list-resume">
                <ul>
                  <li>
                    <img
                      className="service-icon"
                      src={loptopIcon}
                      alt="deep Learning Icon"
                    />
                    <div
                      style={{
                        padding: " 0 16px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      Personal skills and Expertise
                    </div>
                  </li>
                </ul>
              </div>

              <div className="desc-service-wrapper-resume">
                <div className="skills-list">
                  <ul>
                    <li className="border-line-h">
                      <div className="name">Microsoft Windows Servers </div>
                      <div className="progress">
                        <div
                          className="percentage"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                    </li>
                    <li className="border-line-h">
                      <div className="name">Linux Systems </div>
                      <div className="progress">
                        <div
                          className="percentage"
                          style={{ width: "100%" }}
                        ></div>
                      </div>
                    </li>
                    <li className="border-line-h">
                      <div className="name">Hardware </div>
                      <div className="progress">
                        <div
                          className="percentage"
                          style={{ width: "75%" }}
                        ></div>
                      </div>
                    </li>
                    <li>
                      <div className="name">HP Proliant DL- ML- BL</div>
                      <div className="progress">
                        <div
                          className="percentage"
                          style={{ width: "85%" }}
                        ></div>
                      </div>
                    </li>
                    <li>
                      <div className="name">DNS and BIND</div>
                      <div className="progress">
                        <div
                          className="percentage"
                          style={{ width: "95%" }}
                        ></div>
                      </div>
                    </li>
                    <li>
                      <div className="name">Apache HTTP Server </div>
                      <div className="progress">
                        <div
                          className="percentage"
                          style={{ width: "85%" }}
                        ></div>
                      </div>
                    </li>
                    <li>
                      <div className="name">LAMP </div>
                      <div className="progress">
                        <div
                          className="percentage"
                          style={{ width: "75%" }}
                        ></div>
                      </div>
                    </li>
                    <li>
                      <div className="name">Nginx </div>
                      <div className="progress">
                        <div
                          className="percentage"
                          style={{ width: "95%" }}
                        ></div>
                      </div>
                    </li>
                    <li>
                      <div className="name">
                        Linux Advanced Routing (iproute2, L7-filter, tc,
                        Netfilter, Zebra){" "}
                      </div>
                      <div className="progress">
                        <div
                          className="percentage"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                    </li>
                    <li>
                      <div className="name">
                        Samba (MS Active Directory Integration)
                      </div>
                      <div className="progress">
                        <div
                          className="percentage"
                          style={{ width: "100%" }}
                        ></div>
                      </div>
                    </li>
                    <li>
                      <div className="name">NFS</div>
                      <div className="progress">
                        <div
                          className="percentage"
                          style={{ width: "85%" }}
                        ></div>
                      </div>
                    </li>
                    <li>
                      <div className="name">FTP, SFTP and Secure FTP</div>
                      <div className="progress">
                        <div
                          className="percentage"
                          style={{ width: "95%" }}
                        ></div>
                      </div>
                    </li>
                    <li>
                      <div className="name">NTP</div>
                      <div className="progress">
                        <div
                          className="percentage"
                          style={{ width: "80%" }}
                        ></div>
                      </div>
                    </li>
                    <li>
                      <div className="name">OpenLDAP </div>
                      <div className="progress">
                        <div
                          className="percentage"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                    </li>
                    <li>
                      <div className="name">OpenLDAP </div>
                      <div className="progress">
                        <div
                          className="percentage"
                          style={{ width: "75%" }}
                        ></div>
                      </div>
                    </li>
                    <li>
                      <div className="name">
                        Mail Servers (Postfix, Sendmail, Qmail,)
                      </div>
                      <div className="progress">
                        <div
                          className="percentage"
                          style={{ width: "95%" }}
                        ></div>
                      </div>
                    </li>
                    <li>
                      <div className="name">OpenSSL </div>
                      <div className="progress">
                        <div
                          className="percentage"
                          style={{ width: "85%" }}
                        ></div>
                      </div>
                    </li>
                    <li>
                      <div className="name">FreeRADIUS , IBSNG , Kerio </div>
                      <div className="progress">
                        <div
                          className="percentage"
                          style={{ width: "100%" }}
                        ></div>
                      </div>
                    </li>
                    <li>
                      <div className="name">OpenVPN </div>
                      <div className="progress">
                        <div
                          className="percentage"
                          style={{ width: "85%" }}
                        ></div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col col-d-6 col-t-6 col-m-12 border-line-h-resume">
            <div className="service-item-resume" style={{ width: "50%" }}>
              <div className="info-list-resume">
                <ul>
                  <li>
                    <img
                      className="service-icon"
                      src={flagIcon}
                      alt="deep Learning Icon"
                    />
                    <div
                      style={{
                        padding: " 0 16px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      LANGUAGE
                    </div>
                  </li>
                </ul>
              </div>

              <div className="desc-service-wrapper-resume">
                <div className="skills-list dotted">
                  <ul>
                    <li className="border-line-h">
                      <div className="name">English</div>
                      <div className="progress">
                        <div className="percentage" style={{ width: "80%" }}>
                          <span className="da" style={{ width: "291.984px" }}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                          </span>
                        </div>
                        <span className="dg">
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                        </span>
                      </div>
                    </li>
                    <li className="border-line-h">
                      <div className="name">Persian</div>
                      <div className="progress">
                        <div className="percentage" style={{ width: "90%" }}>
                          <span className="da" style={{ width: "291.984px" }}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                          </span>
                        </div>
                        <span className="dg">
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row service-items border-line-v custom-row-grid-code">
          <div className="">
            <div className="service-item-resume">
              <div className="info-list-resume">
                <ul>
                  <li>
                    <img
                      className="service-icon"
                      src={codeIcon}
                      alt="deep Learning Icon"
                    />
                    <div
                      style={{
                        padding: " 0 16px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      CODING
                    </div>
                  </li>
                </ul>
              </div>

              <div className="desc-service-wrapper-resume">
                <div className="">
                  <div className="skills-list circles width-circle">
                    <ul>
                      <li>
                        <div className="name">Python</div>
                        <div className="progress p60">
                          <span>60%</span>
                          <div className="slice">
                            <div className="bar"></div>
                            <div className="fill"></div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="name">Bash Sript</div>
                        <div className="progress p70">
                          <span>70%</span>
                          <div className="slice">
                            <div className="bar"></div>
                            <div className="fill"></div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <div className="service-item-resume" style={{}}>
              <div className="info-list-resume">
                <ul>
                  <li>
                    <img
                      className="service-icon"
                      src={skillIcon}
                      alt="deep Learning Icon"
                    />
                    <div
                      style={{
                        padding: " 0 16px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      KNOWLEDGE
                    </div>
                  </li>
                </ul>
              </div>

              <div className="desc-service-wrapper-resume">
                <br />
                <div>
                  <div style={{ fontWeight: "bold" }}>Monitoring</div>
                  <div>
                    Install Prometheus And Grafana On Docker Swarm and Kuber
                    <br />
                    Install Zabbix , Prtg, OP Manager, Splunk
                  </div>
                </div>
                <br />
                <div>
                  <div style={{ fontWeight: "bold" }}>Microsoft</div>
                  <div>
                    Maintenance of Microsoft Active directory, DNS, DHCP,
                    Microsoft Internet Security and Acceleration
                    Server,Microsoft Routing and Remote Access services
                    <br />
                    Microsoft Exchange 2010,2013,2016,2019
                  </div>
                </div>
                <br />
                <div>
                  <div style={{ fontWeight: "bold" }}>Wireless Routers</div>

                  <div>
                    Config Radio Mikrotik Point To Point
                    <br />
                    Config Access Point UNIFI AC/LR Multi Vlan on Wireless
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card-wrap"></div>
      <div className="content services">
        {/* <div className="line-center-service" /> */}
        <div className="content">
          <div className="title">
            <div className="first-word-wrapper">
              <div className="first-word">T</div> <div>estimonials</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* <a href="file:///F:/project/personal/personal_web/public/catalog/index.html#Testimonials/page1"> */}
        <a href="../../../public/catalog/index.html#Testimonials/page1">
          <button
            style={{
              border: "none",
              outline: "none",
              padding: "14px",
              backgroundColor: " rgb(131, 213, 251)",
              fontWeight: "bold",
              color: "#fff",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Click to view the certificates.
          </button>
        </a>
      </div>
    </div>
  );
}

export default Resume;
