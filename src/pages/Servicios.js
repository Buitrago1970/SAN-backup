import React from "react";

//styles
import "./styles/servicios.css";
//componets
import HeroServicios from "../components/HeroServicios";
import MainServicios from "../components/MainServicios";
import QualityDetails from "../components/QualityDetails";

class Servicios extends React.Component {
  render() {
    const card = [
      {
        title: "Lorem ipsum.",
        paragrahp:
          "Since 2018, Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dicta itaque officiis ex recusandae est harum! Optio, quidem!.",
      },
      {
        title: "Lorem ipsum.",
        paragrahp: "We’re investing in Lorem ipsum dolor sit amet consectetur.",
      },
    ];
    return (
      <>
        <div className="main-container-servicios">
          <HeroServicios />
          {/*   
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
        <QualityDetails /> */}
          <MainServicios />
        </div>
      </>
    );
  }
}

export default Servicios;
