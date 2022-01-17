import React from "react";

//styles
import "./styles/servicios.css";
//componets
import HeroServicios from "../components/HeroServicios";
import MainServicios from "../components/MainServicios";
 import QualityDetails from "../components/QualityDetails";

class Servicios extends React.Component {
  render() {
    return (
      <>
        <div className="main-container-servicios">
          <HeroServicios />
        <div className="nosotros-container-text"></div>
        <QualityDetails /> 
          <MainServicios />
        </div>
      </>
    );
  }
}

export default Servicios;
