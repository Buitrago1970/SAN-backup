import React from "react";

import "./styles/MainServicios.css";

export default function MainServicios() {
  const data = [
    {
      id: 1,
      title: "Corte",
      description: "Especializados en todo corte.",
      image:"https://san-ecommerce.s3.amazonaws.com/AdobeStock_128943712_Preview+copia.png",
      min_description : "Tenderloin ⎮ Tri-Tip Steak ⎮ Back Ribs ⎮ Flank Steak ⎮ Top Round Steak"
    },
    {
      id: 2,
      title: "Empaque",  
      description: "Especialistas en diferentes tipos Empaque.",
      image:"https://san-ecommerce.s3.amazonaws.com/BlackTieBox_014_1920px+copia+2.png",
      min_description:"Empaque vacio ⎮ Papel carnicero ⎮ Bolsa plastica ⎮ Envase  "
    },
    {
      id: 3,
      title: "Envio",
      description: "En menos de 24 horas recibiras tu pedido.",
      image:"https://san-ecommerce.s3.amazonaws.com/proace-meister-tcm-17-1623631+copia.png",
      min_description:"Fechas flexibles de entrea de pedido"
    },
    {
      id: 4,
      title: "Entrega",
      description: "De nuestra casa a tu casa.",
      image:"https://san-ecommerce.s3.amazonaws.com/3238046+copia.png",
      min_description:"Te llevamos tu pedido de nuestra casa a tu casa."
    },
  ];
  return (
    <div className="container-main-servicios">
      <div className="main-servicios">
        {data.map((item) => (
          <div className="data-servicios" key={item.id}>
            <div className="module-content">
              <div className="unit-wrapper">
                <div className="texto-module-main-servicios">
                  <h4 className="logo-image logo-image-ipad-mini-promo-logo-ipad-mini headline">
                    <span className="visuallyhidden">{item.title}</span>
                  </h4>
                  <h5 className="subhead" role="presentation">
                    {item.description}
                  </h5>
                  <p className="avail" >
                    {item.min_description}
                  </p>
                </div>
                <div className="image-module-main-servicios">
                  <img className="unit-image unit-image-ipad-mini-promo-ipad-mini" src={item.image} alt="Foto"/>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
