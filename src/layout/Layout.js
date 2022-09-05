import React from "react";
import Background from "../components/background/Background";

function Layout({ children }) {
  return (
    <React.Fragment>
      <Background>{children}</Background>
    </React.Fragment>
  );
}

export default Layout;
