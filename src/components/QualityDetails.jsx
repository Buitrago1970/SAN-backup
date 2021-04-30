import React from "react";

import "./styles/QualityDetails.css";

import badge from "../images/gold.png";
function QualityDetails() {
  return (
    <>
      <h1 className="team-title team-title-qd ">TITLES</h1>
      <h2>best buys lorem</h2>
      <div className="container-contact-data">
        <div className="container-badges">
          <div className="container-badge">
            <img className="img-badge" src={badge} alt="" />
          </div>
          <h3 className="title-badge">titulo1</h3>
          <p className="paragraph-badge">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            laboriosam et, deserunt totam sed voluptas commodi.
          </p>
        </div>
        <div className="container-badges">
          <div className="container-badge">
            <img className="img-badge" src={badge} alt="" />
          </div>
          <h3 className="title-badge">titulo1</h3>
          <p className="paragraph-badge">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            laboriosam et, deserunt totam sed voluptas commodi.
          </p>
        </div>
        <div className="container-badges">
          <div className="container-badge">
            <img className="img-badge" src={badge} alt="" />
          </div>
          <h3 className="title-badge">titulo1</h3>
          <p className="paragraph-badge">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            laboriosam et, deserunt totam sed voluptas commodi.
          </p>
        </div>
      </div>
    </>
  );
}
export default QualityDetails;
