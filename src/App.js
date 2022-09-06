import React from "react";
import Header from "./layout/headers/Header";
import Layout from "./layout/Layout";
import Profile from "./layout/profile/Profile";
import Pages from "./pages/Pages";
import { Col, Row } from "./components/grid";
import "./App.css";

function App() {
  return (
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
            <Pages />
          </div>
        </Col>
      </Row>
    </Layout>
  );
}

export default App;
