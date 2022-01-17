import * as React from "react";
import { useContext } from "react"; 
import Appcontext from "../context/Appcontext";
import { handleSumTotal } from "../utils/index";


import "./styles/SendData.css"
export default function SendData( {buyer}) {
  const {
    state: { cart },
  } = useContext(Appcontext);

  const numEnvioGratis = 50000;
  const valorEnvio = 5;
  const total = handleSumTotal(cart);

  return (
    <>
    {buyer && <div className="container-send-date">
        <div className="send-date-data">   
            <p className="send-data-p">Llega el {'lunes'} a tu direccion</p>
        { total >= numEnvioGratis ? <p className="send-data-p send-data-p-cost">
              Gratis
          </p> : <p>$ {valorEnvio}.000</p> }
        </div>
      </div> }
      
    </>
  );
}
