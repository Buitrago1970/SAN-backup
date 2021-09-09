import React from "react";

//components
import HeroNosotros from "../components/HeroNosotros";
//styles
import "./styles/nosotros.css";

//img
import xd from "../images/tattoome.jpg";
import Nosotros2 from "../images/cortes.png";
// import meat from "../images/6458.png";
class Nosotros extends React.Component {
  render() {
    return (
      <>
        <div className="main-container">
          <HeroNosotros />
          <div className="Container-nosotros">
            <div className="n">
              <div className="nosotros-container-text">
                <div className="sub-title-container">
                  <span>Street Smart.</span>
                  <span className="sub-title-nosotros">
                    Dirt-,rock and dune ready.
                  </span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                  dicta itaque officiis ex recusandae est harum! Optio, quidem!
                  Pariatur cum doloremque reiciendis nemo asperiores aliquid,
                  itaque perspiciatis lo eaque fugiat fugit. recusandae est
                  harum! Optio, quidem! Pariatur cum doloremque lo eaque fugiat
                  fugit.
                </p>
              </div>
              <div className="img-nosotros2">
                <img src={Nosotros2} alt="" />
              </div>
            </div>
          </div>

          <div className="container">
            <div className="text-container-vision  ">
              <h2 className="vision">vision</h2>
              <p className="main-paragraph">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
                quod deserunt accusamus? Expedita praesentium nemo eius quos
                tempora Lorem ipsum dolor sit, amet consectetur adipisicing
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
                veniam minus aspernatur? Distinctio consequatur nemo cupiditate
                vel quia necessitatibus qui quo voluptatibus, rerum cum veniam
                animi aperiam quaerat iure ab. elit.
              </p>
            </div>
          </div>

          <div className="container-nosotros ">
            <div className="sub-title-container">
              <span className="sub-title">Our Team</span>
            </div>
            <div className=" our-team ">
              <div className="out-team-container">
                <div className="container-img-our-team">
                  <img className="img-our-team" src={xd} alt="" />
                </div>
                <div className="text-container-our-team">
                  <h3 className="name-team">Juan Buitrago</h3>
                  <p>Cortador Profesional</p>
                </div>
              </div>
              <div className="out-team-container">
                <div className="container-img-our-team">
                  <img className="img-our-team" src={xd} alt="" />
                </div>
                <div className="text-container-our-team">
                  <h3 className="name-team">Juan Buitrago</h3>
                  <p>Cortador Profesional</p>
                </div>
              </div>
              <div className="out-team-container">
                <div className="container-img-our-team">
                  <img className="img-our-team" src={xd} alt="" />
                </div>
                <div className="text-container-our-team">
                  <h3 className="name-team">Juan Buitrago</h3>
                  <p>Cortador Profesional</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Nosotros;
