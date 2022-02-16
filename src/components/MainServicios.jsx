import React from "react";

import "./styles/MainServicios.css";

export default function MainServicios() {
  const data = [
    {
      id: 1,
      title: "Corte",
      description: "Especializados en todo corte.",
      image:"http://localhost:1337/uploads/1000_F_128943712_Gd_Tri_C_Hk_Nbe_LMNMI_Bcw8y_B_Fiq4_Hy_I53_P_4ed9876703.jpg?updated_at=2022-01-15T01:14:29.831Z"
    },
    {
      id: 2,
      title: "Empaque",  
      description: "Empacado vacio, envase o papel de carnicero.",
      image:"http://localhost:1337/uploads/Black_Tie_Box_014_1920px_1024x1024_05cbe83d33.jpg?updated_at=2022-01-15T01:31:54.778Z"    },
    {
      id: 3,
      title: "Envio",
      description: "En menos de 24 horas recibiras tu pedido.",
      image:"http://localhost:1337/uploads/jumpy_lateral_1_640x360_1_1_6c2d0c7bfc.png?updated_at=2022-01-15T01:14:29.798Z"
    },
    {
      id: 4,
      title: "Entrega",
      description: "De nuestra casa a tu casa.",
      image:"http://localhost:1337/uploads/repartidor_entregando_caja_cliente_23_2148669584_copia_1_5a0e80634e.png?updated_at=2022-01-15T01:14:29.831Z"
    },
  ];
  return (
    <div className="container-main-servicios">
      <div class="main-servicios">
        {data.map((item) => (
          <div class="data-servicios ">
            <div className="module-content">
              <div class="unit-wrapper">
                <div className="texto-module-main-servicios">
                  <h4 class="logo-image logo-image-ipad-mini-promo-logo-ipad-mini headline">
                    <span class="visuallyhidden">{item.title}</span>
                  </h4>
                  <h5 class="subhead" role="presentation">
                    {item.description}
                  </h5>
                  <p class="avail" role="text">
                    Consulta la disponibilidad más adelante
                  </p>
                </div>
                <div className="image-module-main-servicios">
                  <img class="unit-image unit-image-ipad-mini-promo-ipad-mini" src={item.image} alt="Foto"/>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
