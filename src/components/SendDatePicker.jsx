import * as React from "react";
import { useContext } from "react"; 
import Appcontext from "../context/Appcontext";
import { handleSumTotal } from "../utils/index";


import "./styles/SendData.css"
export default function SendData( {user, }) {
  const {
    state: { cart },
  } = useContext(Appcontext);

  const numEnvioGratis = 50000;
  const valorEnvio = 5;
  const total = handleSumTotal(cart);

  const dataSendDate = [
    {
      id : 1,
      date : "Hoy",
      // price : 0,
    },
    // {
    //   id : 2,
    //   date : "Mañana",
    //   // price : valorEnvio,
    // },
  ]
  if(user){
 return (
    <>

      <div className="sendDate">
        <p className="cart-length-title">Recibir compra</p>
        <div className="sendDate-container">
          <ul className="sendDate-list">
            {dataSendDate.map((item, index) => (
              <li className="sendDate-list-item" key={index}>
                <label className="sendDate-label">
                  <div className="ui-radio-element">
                    <input type="radio" name="radio" defaultChecked="checked"/>
                    <span className="ui-radio-element__control"></span>
                  </div>
                  <div className="ui-radio__text-sendDate">
                    <p className="send-data-p">Llega {item.date} a tu direccion</p>    
                    { total >= numEnvioGratis ? <p className="send-data-p send-data-p-cost">
                        Gratis
                          </p> : <p>$ {valorEnvio}.000</p> }
                         </div>
                          </label>
                          </li>
            ))}
          </ul>
        </div>
      </div>
       
    </>
  );
  }else{
    return null
  }
 
}
