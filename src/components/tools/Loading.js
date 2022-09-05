import React from "react";
import "./loading.css";

const Loading = ({ text = "" }) => (
  <div className="loadings">
    <div className="loading-background"></div>
    <div className="loading-wrapper">
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {text && <div className="loading-text">{text}...</div>}
    </div>
  </div>
);

export default Loading;
