import React from "react";
import "./styles/Payment.css";

export default function Payment() {
  return (
    <>
      <div className="payment">
        <div className="a">
          <h3>Resumen de Compra</h3>
          <hr />
          <div className="account">
            <div className="container-payment">
              <p>Productos(2)</p>
              <p>$14.000</p>
            </div>

            <div className="container-payment">
              <p>Envio</p>
              <p className="envio">Gratis</p>
            </div>
            <hr />
          </div>
          <div className="total-count">
            <div className="container-payment">
              <p>Total</p>
              <p>$ 199.000</p>
            </div>
          </div>
          <button className="button btn-payment">Proceder al pago</button>
        </div>
      </div>
    </>
  );
}
