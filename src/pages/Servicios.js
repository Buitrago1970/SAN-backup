import React from "react";

//styles
import "./styles/servicios.css";
//componets
import HeroSection from "../components/HeroServicios";
import QualityDetails from "../components/QualityDetails";

class Servicios extends React.Component {
  render() {
    const card = [
      {
        title: "More power.",
        paragrahp:
          "Since 2018, Apple’s stores, offices, and data centers have run on 100% renewable energy. Today all our operations are carbon neutral, too.",
      },
      {
        title: "Apple Inc. Officially in the green.",
        paragrahp: "We’re investing in some wild ideas for carbon removal.",
      },
    ];
    return (
      <>
        <div className="main-container">
          <HeroSection />
          <div className="container-card">
            {card.map((card) => (
              <div className="card-content">
                <span className="line1">{card.title}</span>
                <span className="card-image"></span>
                <span className="line2">{card.paragrahp}</span>
              </div>
            ))}
          </div>
          <div className="nosotros-container-text"></div>
          <QualityDetails />
        </div>
      </>
    );
  }
}

export default Servicios;
