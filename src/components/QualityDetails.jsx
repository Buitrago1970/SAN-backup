import React from "react";

import "./styles/QualityDetails.css";
import crow from "../images/crow.png";

function QualityDetails() {
  const initialState = {
    badges: [
      {
        number: "390",
        title: " Title  Title  Title Title Title",
      },
      {
        number: "296",
        title: " Title  Title  Title Title Title",
      },
      {
        number: "428",
        title: " Title  Title  Title Title Title",
      },
    ],
  };
  const { badges } = initialState;
  return (
    <>
      <section className="section-badges">
        <div className="container-badges">
          <span className="sub-title">Titulo De Logros/Metas</span>
          <div className="badges">
            {badges.map((item) => (
              <>
                <div className="badges-item">
                  <img className="imgs" src={crow} alt="" />
                  <p className="number-badge">{item.number}</p>
                  <p>{item.title}</p>
                  <img className="img-reverse" src={crow} alt="" />
                </div>
              </>
            ))}
          </div>
        </div>
        <div className="">{/* <img src={butcher} alt="" /> */}</div>
      </section>
    </>
  );
}

export default QualityDetails;
