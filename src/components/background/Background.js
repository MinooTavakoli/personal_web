import React from "react";
import "./Background.css";
<style></style>;
function Background({children}) {
  return (
    <div className="container-fluid">
      <div className="background">
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
      {children}
      </div>
    </div>
  );
}

export default Background;
