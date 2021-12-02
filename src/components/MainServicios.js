import React from "react";

import "./styles/MainServicios.css";

export default function MainServicios() {
  const data = [
    {
      id: 1,
      title: "iPad mini",
      description: "Grande\u00A0en\u00A0poder. Mini\u00A0en\u00A0tamaño.",
    },
    {
      id: 2,
      title: "iPad mini",
      description: "Grande\u00A0en\u00A0poder. Mini\u00A0en\u00A0tamaño.",
    },
    {
      id: 3,
      title: "iPad mini",
      description: "Grande\u00A0en\u00A0poder. Mini\u00A0en\u00A0tamaño.",
    },
    {
      id: 4,
      title: "iPad mini",
      description: "Grande\u00A0en\u00A0poder. Mini\u00A0en\u00A0tamaño.",
    },
  ];
  return (
    <div class="parent-main-servicios">
      {data.map((item) => (
        <div class="data-servicios div1">
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
                <figure class="unit-image unit-image-ipad-mini-promo-ipad-mini"></figure>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
