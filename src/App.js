import React from "react";
import Header from "./layout/headers/Header";
import Layout from "./layout/Layout";
import Profile from "./layout/profile/Profile";
import Page from "./layout/page/Page";
import "./App.css";
import { Col, Row } from "./components/grid";

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
            <Page />
          </div>
        </Col>
      </Row>
    </Layout>
  );
}

export default App;
