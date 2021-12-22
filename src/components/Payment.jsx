import React, { useContext } from "react";
import "./styles/Payment.css";
import { Link } from "react-router-dom";

import Appcontext from "../context/Appcontext";
import { handleSumTotal } from "../utils/index";

export default function Payment({ data }) {
  const {
    state: { cart },
  } = useContext(Appcontext);

  return (
    <>
      <div className="payment">
        <div className="container-payment">
          <h3>Resumen de Compra</h3>
          <hr />
          <div className="container-account">
            <div className="account">
              <p>Productos(2)</p>
              <p>{new Intl.NumberFormat().format(handleSumTotal(cart))}</p>
            </div>
            <div className="account">
              <p>Envio</p>
              <p className="envio">Gratis</p>
            </div>
            <hr />
          </div>
          <div className="total-count">
            <div className="account">
              <p>Total</p>
              <p>$ {new Intl.NumberFormat().format(handleSumTotal(cart))}</p>
            </div>
          </div>
          <Link to="/carrocompras/{}/direccion">
            <button className="button btn-payment">{data}</button>
          </Link>
        </div>
      </div>
    </>
  );
}
