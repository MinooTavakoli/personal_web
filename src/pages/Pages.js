import React from "react";
import { Card } from "../components/card";
import { Col, Row } from "../components/grid";
import About from "./about/About";
import Resume from "./resume/Resume";
import "./Pages.css";

function Page() {
  return (
    <Card dir="ltr" style={{}}>
      {/* <About /> */}
      <Resume />
    </Card>
  );
}

export default Page;
