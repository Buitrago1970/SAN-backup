import React from "react";
import ProductsList from "../components/ProductsList";
import "./styles/home.css";

class Home extends React.Component {
  render() {
    return (
      <>
        <h1 className="principal-title">Carniceria Online</h1>
        <h3 className="title-secondary">surticarnes san diego</h3>
        <ProductsList />
      </>
    );
  }
}

export default Home;
