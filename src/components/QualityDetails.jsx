import React from "react";

import "./styles/QualityDetails.css";
import crow from "../images/crow.png";

function QualityDetails() {
  const initialState = {
    badges: [
      {
        number: "1993",
        title: "Desde el año 1993",
      },
      {
        number: "+ 500.000",
        title: "Con mas de 500.000 pedidos",
      },
      {
        number: "+ 300",
        title: "Contamos con más de 300 productos",
      },
    ],
  };
  const { badges } = initialState;
  return (
    <>
      <section className="section-badges">
        <div className="container-badges">
          <p className="sub-title-quality-details">Logros</p>
          <div className="badges">
            {badges.map((item) => (
              <>
                <div className="badges-item">
                  <img className="imgs" src={crow} alt="" />
                  <div>
                  <p className="number-badge">{item.number}</p>
                  <p className="p-quality-details">{item.title}</p>
                  </div>
            
                  <img className="img-reverse" src={crow} alt="" />
                </div>
              </>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default QualityDetails;
