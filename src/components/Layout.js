import React from "react";
import Footer from "./Footer";
import Header from "./Header";

import Helmet from 'react-helmet'

function Layout(props) {
  return (
    <>
      <Header />
      <Helmet>
        <title>San Diego</title>
        <meta name="ABC"  />
        <link rel="icon" type="image/.png" href="https://san-ecommerce.s3.amazonaws.com/favicon_23c607f625.ico" sizes="16x16" />
    </Helmet>
      {props.children}
      <Footer />
    </>
  );
}

export default Layout;

