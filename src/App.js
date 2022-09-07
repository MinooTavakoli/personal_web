import React from "react";
import Header from "./layout/headers/Header";
import Layout from "./layout/Layout";
import Profile from "./layout/profile/Profile";
import { Col, Row } from "./components/grid";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/about/About";
import Resume from "./pages/resume/Resume";
import { Card } from "./components/card";
import "./App.css";

function App() {
  return (
    <Router>
      <Layout>
        <Row dir="ltr">
          <Col md="2">
            <div className="custom-container-head">
              <Header />
            </div>
          </Col>

          <Col md="8">
            <div className="custom-container-profile">
              <Profile />
            </div>
          </Col>

          <Col md="14">
            <div className="custom-container-page">
              <Card>
                <Routes>
                  <Route path="/" element={<About />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/resume" element={<Resume />} />
                </Routes>
              </Card>
            </div>
          </Col>
        </Row>
      </Layout>
    </Router>
  );
}

export default App;
