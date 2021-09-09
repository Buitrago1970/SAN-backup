import React from "react";

//styles
import "./styles/servicios.css";
//componets
import HeroSection from "../components/HeroServicios";
import QualityDetails from "../components/QualityDetails";
import transport from "../images/truck.png";

class Servicios extends React.Component {
  render() {
    return (
      <>
        <div className="main-container">
          <HeroSection />
          <div className="container-img-servicios-middle">
            <img src={transport} alt="" />
          </div>
          <QualityDetails />
        </div>
      </>
    );
  }
}

export default Servicios;
