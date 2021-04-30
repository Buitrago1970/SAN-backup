import React from "react";

//components
import HeroNosotros from "../components/HeroNosotros";
//styles
import "./styles/nosotros.css";

//img
import xd from "../images/tattoome.jpg";
// import meat from "../images/6458.png";
class Nosotros extends React.Component {
  render() {
    return (
      <>
        <div className="main-container">
          <HeroNosotros />
          <div className="container">
            <div className="text-container">
              <h2 className="secondary-title vision">vision</h2>
              <h3 className="third-title">
                A veces una palabra dice más que mil imágenes.
              </h3>
              <hr className="separator-line" />
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
          <h1 className="team-title">OUR TEAM</h1>
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
      </>
    );
  }
}

export default Nosotros;
