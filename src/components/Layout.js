import React from "react";
import Footer from "./Footer.js";
import Header from "./Header";

function Layout(props) {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
}

export default Layout;
