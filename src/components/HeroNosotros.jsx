import React from "react";

//styles
import "./styles/HeroNosotros.css";
import { AiOutlineDown } from "react-icons/ai";
//images
import meat from "../images/6458.png";
//icons

function HeroNosotros() {
  return (
    <>
      <div className="x">
        <div className="hero-nosotros">
          <div className="contaner-img-nosotros">
            <img className="img-nosotros" src={meat} alt="" />
          </div>
          <div className="text-nosotros">
            <div className="title-container-hero-nosotros">
              <h1 className="title-hero-nosotros">
                Experimente La Conveniencia
              </h1>

              <h1 className="title-hero-nosotros">De Compra En Linea </h1>
            </div>
            <div className="text-container text-container-nosotros">
              <p>
                Carnes Online Colombia llegó para suplir la necesidad que muchos
                tenemos, comprar la carne de la semana o de la parrillada del
                fin de semana, a un solo clic.
              </p>
              <br />
              <p>
                Se vende carne de corte online y los productos van desde carne
                de res, carne de cerdo, carne de pollo, carne de cordero,
                pescado y muchas otras. Para comprar carne no solo hay que tener
                la necesidad de ello, sino que también hay que saber donde
                hacerlo.
              </p>
              <div className="icon-container">
                <AiOutlineDown />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroNosotros;
