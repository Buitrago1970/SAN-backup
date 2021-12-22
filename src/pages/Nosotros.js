import React from "react";

//components
import HeroNosotros from "../components/HeroNosotros";
//styles
import "./styles/nosotros.css";

//img
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
                  <span>Nosotros</span>
                  <span className="sub-title-nosotros">
                    lorem! ipsum dolor sit.
                  </span>
                </div>
                <p>
                  nuestro equipo son profesionales, bien capacitados para
                  atender a nuestros clientes con el fin de resolver cualquier
                  duda que tengan, y a la vez brindarles una solución a
                  cualquier inconveniente que puedan.
                </p>
              </div>
              <div className="img-nosotros2">
                <img
                  src="https://dummyimage.com/570x400/ffffff/000000"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="container">
            <div className="text-container-vision  ">
              <h2 className="vision">Vision</h2>
              <p className="main-paragraph">
                Carnes online colombia nace con la visión de ofrecer el mejor
                producto y más fresco directamente al consumidor y a domicilio
                sin intermediarios, venimos a llenar la necesidad que muchos de
                nosotros tenemos, comprar la carne de la semana o el fin de
                semana de parrillada, en un solo clic.
              </p>
            </div>
          </div>

          <div className="container-nosotros ">
            <div className="sub-title-container">
              <span className="sub-title">Nuestro Equipo</span>
            </div>
            <div className=" our-team ">
              <div className="out-team-container">
                <div className="container-img-our-team">
                  <img
                    className="img-our-team"
                    src="https://dummyimage.com/500x650/ffffff/000000"
                    alt=""
                  />
                </div>
                <div className="text-container-our-team">
                  <h3 className="name-team">Juan Buitrago</h3>
                  <p>Cortador Profesional</p>
                </div>
              </div>
              <div className="out-team-container">
                <div className="container-img-our-team">
                  <img
                    className="img-our-team"
                    src="https://dummyimage.com/500x650/ffffff/000000"
                    alt=""
                  />
                </div>
                <div className="text-container-our-team">
                  <h3 className="name-team">Juan Buitrago</h3>
                  <p>Cortador Profesional</p>
                </div>
              </div>
              <div className="out-team-container">
                <div className="container-img-our-team">
                  <img
                    className="img-our-team"
                    src="https://dummyimage.com/500x650/ffffff/000000"
                    alt=""
                  />
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
