import * as React from "react";

import "./styles/SendData.css"
export default function SendData() {
  return (
    <>
      <div className="container-send-date">
        <div className="send-date-data">   
            <p className="send-data-p">Llega el {'lunes'} a tu direccion</p>
          <p className="send-data-p send-data-p-cost">
              Gratis
          </p>
        </div>
      </div>
    </>
  );
}
