import React from "react";

//styles
import "./styles/servicios.css";
//componets
import HeroSection from "../components/HeroServicios";
import QualityDetails from "../components/QualityDetails";

class Servicios extends React.Component {
  render() {
    return (
      <>
        <div className="main-container">
          <HeroSection />
          <QualityDetails />
          <HeroSection />
        </div>
      </>
    );
  }
}

export default Servicios;
