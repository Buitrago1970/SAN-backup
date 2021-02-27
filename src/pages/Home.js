import React from "react";

import Header from "../components/Header.js";
import ProductsList from "../components/ProductsList";
import Footer from "../components/Footer.js";
import "./styles/home.css";

class Home extends React.Component {
  render() {
    return (
      <>
        <Header />
        <h1 className="principal-title">Carniceria Online</h1>
        <h3 className="title-secondary">surticarnes san diego</h3>
        <ProductsList />
        <Footer />
      </>
    );
  }
}

export default Home;
