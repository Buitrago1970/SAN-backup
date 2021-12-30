import React, { useContext } from "react";
import "./styles/Payment.css";
import { Link } from "react-router-dom";

import Appcontext from "../context/Appcontext";
import { handleSumTotal } from "../utils/index";

export default function Payment({ data, route }) {
  const {
    state: { cart },
  } = useContext(Appcontext);
  const numEnvioGratis = Intl.NumberFormat().format(50000);
  const valorEnvio = Intl.NumberFormat().format(5000);
  const total = new Intl.NumberFormat().format(handleSumTotal(cart));
  return (
    <>
      <div className="payment">
        <div className="container-payment">
          <h3>Resumen de Compra</h3>
          <hr />
          <div className="container-account">
            <div className="account">
              <p>Productos ({cart.length})</p>
              <p>{total}</p>
            </div>
            <div className="account">
              <p>Envio</p>
             {total >= numEnvioGratis ?  <p className="costo-envio-gratis">Gratis</p> : <p>$ {valorEnvio}</p> }
            </div>
            <hr />
          </div>
          <div className="total-count">
            <div className="account">
              <p>Total</p>
              {total >= numEnvioGratis ? <p>$ {total}</p>   : <p className="costo-envio">$ {Intl.NumberFormat().format(parseInt(total) + parseInt(valorEnvio))}.000</p> }
              
            </div>
          </div>
          {console.log(route)}
          <Link to={route}>
            {data && <button className="button btn-payment">{data}</button>}
          </Link>
        </div>
      </div>
    </>
  );
}
