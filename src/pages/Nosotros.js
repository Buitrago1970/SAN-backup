import * as React from "react";

//components
import HeroNosotros from "../components/HeroNosotros";
//styles
import "./styles/nosotros.css";

//img
import imagen from "../images/R.jpeg"

import imagen2 from "../images/1000_F_255564376_jrP7JCENc7MfEvgtG0toxTCkJSL53QZc copia.png"
import imagen3 from "../images/1000_F_324810272_2eyoWeAHhV1UDiXgNyEaKJxSWQ0Yxk7p copia.png"
import imagen4 from "../images/1000_F_326992271_emdTQVlnD2NcBBKmkXWDA7DMFiGKRSlv copia.png"


class Nosotros extends React.Component {

  render() {
    window.scrollTo(0, 0)
    return (
      <>
        <div className="main-container">
          <HeroNosotros />
          <div className="Container-nosotros">
            <div className="n">
              <div className="nosotros-container-text">
                <div className="sub-title-container">
                  <span className="sub-title-nosotros sub-title-nosotros-dos">Nosotros</span>
                  <span className="sub-title-nosotros">
                    Inovaciones y Calidad.
                  </span>
                </div>
                <p>
                  Construimos nuestro nombre proprcionando a generaciones de familias comida saludable y de gran sabor.
                  Pero carnes online colombia hoy es mucho mas.
                  A medida que el comportamiento en torno a la comida han cambiado, nosotros tambien.
                  Hoy somos inovadores en una posicion unica para remodelar lo que significa alimentar a nuestro pais.
                </p>
              </div>
              <div className="img-nosotros2">
                <img
                  src={imagen}
                  alt=""
                />
              </div>
            </div>
          </div>



          <div className="container">
            <div className="text-container-vision  ">
              <h2 className="vision">Vision</h2>
              <p className="main-paragraph">
                Surticarnes San-Diego nace con la visión de ofrecer el mejor
                producto y más fresco directamente al consumidor y a domicilio
                sin intermediarios. Que nuestros clientes
                reciban una gran variedad de comida saludable y de gran sabor.
              </p>
            </div>
          </div>


          <div className="container-nosotros ">
            <div className="sub-title-container">
              <span className="sub-title">Nuestro Equipo</span>
              <span className="p-our-team-nosotros">Para alimentar un mundo cambiante se necesita un equipo increible. Desde la tabala de cortar hasta la sala de juntas,
                cada miembro del equipo carnes online colombia juega un papel importante en nuestro exito.
              </span>
            </div>

            <div className=" our-team ">
              <div className="out-team-container">
                <div className="container-img-our-team">
                  <img
                    className="img-our-team"
                    src={imagen2}
                    alt=""
                  />
                </div>
                <div className="text-container-our-team">
                  <h3 className="name-team">Diego Chico </h3>
                  <p>Cortador Profesional</p>
                </div>
              </div>
              <div className="out-team-container">
                <div className="container-img-our-team">
                  <img
                    className="img-our-team"
                    src={imagen3}
                    alt=""
                  />
                </div>
                <div className="text-container-our-team">
                  <h3 className="name-team">Flavia Mar Pombo</h3>
                  <p>Cortador Profesional</p>
                </div>
              </div>
              <div className="out-team-container">
                <div className="container-img-our-team">
                  <img
                    className="img-our-team"
                    src={imagen4}
                    alt=""
                  />
                </div>
                <div className="text-container-our-team">
                  <h3 className="name-team">León de Saldaña</h3>
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
