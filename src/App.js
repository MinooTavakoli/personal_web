import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import Header from "./layout/headers/Header";
import Layout from "./layout/Layout";
import Profile from "./layout/profile/Profile";
import { Col, Row } from "./components/grid";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import About from "./pages/about/About";
import Resume from "./pages/resume/Resume";
import Contact from "./pages/contact/Contact";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./App.css";

function AnimationExample() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

function App() {
  // const location = useLocation();
  // const [displayLocation, setDisplayLocation] = useState(location);
  // const [transitionStage, setTransistionStage] = useState("fadeIn");

  // useEffect(() => {
  //   if (location !== displayLocation) setTransistionStage("fadeOut");
  // }, [location]);

  return (
    <Router>
      <Layout>
        <Row dir="ltr" className="head-responsive">
          <Col md="2" className="custom-container-head-wrapper">
            <div className="custom-container-head">
              <Header />
            </div>
          </Col>

          <Col>
            <div className="custom-container-profile">
              <Profile />
            </div>
          </Col>

          <Col className="custom-container-responsive">
            <div className="custom-container-page">
              <div
                // className={`${transitionStage}`}
                // onAnimationEnd={() => {
                //   if (transitionStage === "fadeOut") {
                //     setTransistionStage("fadeIn");
                //     setDisplayLocation(location);
                //   }
                // }}
              >

                <Routes>
                  <Route path="/" element={<About />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/resume" element={<Resume />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </div>
            </div>
          </Col>
        </Row>
      </Layout>
    </Router>
  );
}

export default App;
