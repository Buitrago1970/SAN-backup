import * as React from "react";
import { useContext } from "react";

import Address from "../components/Address";
import ShoppingList from "../components/ShoppingList";
import Payment from "../components/Payment";
import SendDate from "../components/SendDate";
import "./styles/ShoppingList.css";
import Appcontext from "../context/Appcontext";

export default function ShoppingCart() {
  const {state:{buyer}} = useContext(Appcontext)
  //variable ocultar botones
  const hideButtons = true
  return (
    <div className="main-container">
      <div className="hero-shopping-cart">
        <div>
          <Address buyer={buyer[0]} />
          <SendDate buyer={buyer[0]} />
          <ShoppingList hideButtons={hideButtons}/>
        </div>
        <Payment data={"Proceder al pago"} route={"/carrocompras/payment"} />
      </div>
    </div>
  );
}
