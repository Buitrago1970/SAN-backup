import React from "react";

//styles
import "./styles/home.css";

import Navbar from "../components/Navbar";
import ProductsList from "../components/ProductsList.jsx";

class Home extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        {/* <h1 className="principal-title">Carniceria Online</h1>
        <h3 className="title-secondary">surticarnes san diego</h3> */}
        <ProductsList />
      </>
    );
  }
}

export default Home;
