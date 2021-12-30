import * as React from "react";
import { useContext } from "react"; 
import Appcontext from "../context/Appcontext";
import { handleSumTotal } from "../utils/index";


import "./styles/SendData.css"
export default function SendData( {buyer}) {

  const {
    state: { cart },
  } = useContext(Appcontext);
  const numEnvioGratis = Intl.NumberFormat().format(50000);
  const valorEnvio = Intl.NumberFormat().format(5000);
  const total = handleSumTotal(cart);

  return (
    <>
    {buyer && <div className="container-send-date">
        <div className="send-date-data">   
            <p className="send-data-p">Llega el {'lunes'} a tu direccion</p>
       
        {new Intl.NumberFormat().format(handleSumTotal(cart)) >= numEnvioGratis ?     <p className="send-data-p send-data-p-cost">
              Gratis
          </p> : <p>$ {valorEnvio}</p> }

        </div>
      </div> }
      
    </>
  );
}
