import * as React from "react";

//components
import HeroNosotros from "../components/HeroNosotros";
//styles
import "./styles/nosotros.css";

//img

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
