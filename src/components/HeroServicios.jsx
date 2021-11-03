import React from "react";

//styles
import "./styles/HeroServicios.css";

//images

function HeroServicios() {
  return (
    <>
          <div class="parent">
          <div class="div1">
          <div className="title-SV"><h1>Lorem lorem</h1></div>
          <div className="paragraph-container">
            <p className="sub-title-SV">lorem ipsum.</p>
            <p>texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto </p>
          </div>
          <div className="paragraph-container">
            <p className="sub-title-SV"> lorem ipsum.</p>
            <div className="second-paragraph-container paragraph-container">
              <div className="icon-paragraph-SV">
                <img src="../images/crow.png" alt="" />
              </div>
              <p>lorem lorem lorem lorem lorem loren lorem lorem loren .</p>
            </div>
          </div>
          </div>
          <div class="div2">
          <div className="container-img">
            <img src="https://dummyimage.com/600x400" alt=""/>
          </div>
            </div> 
          </div> 
    </>
  );
}

export default HeroServicios;
