import React from "react";

import "./styles/QualityDetails.css";
import image1993 from "../images/1993.png"
import image500000 from "../images/500.000.png"
import image300 from "../images/300 copia.png"

function QualityDetails() {

  const qualityDetails = [
    {
      image: image1993,
    },
    {
      image: image500000,
    },
    {
      image: image300,
    },
  ];
  return (
    <>
      <section className="section-badges">
          <p className="sub-title-quality-details">Logros</p>
        <div className="badges-container">
          {qualityDetails.map((qualityDetail, index) => (
             <div className="badges" key={index}>
            <img src={qualityDetail.image} alt="" />
          </div>))
            }
        </div>
      </section>
    </>
  );
}

export default QualityDetails;
