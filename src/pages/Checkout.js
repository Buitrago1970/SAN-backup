import * as React from "react";
import { useContext } from "react";

import Address from "../components/Address";
import ShoppingList from "../components/ShoppingList";
import Payment from "../components/Payment";
import SendDate from "../components/SendDate";
import "./styles/ShoppingList.css";
import Appcontext from "../context/Appcontext";

export default function ShoppingCart() {
  const {state:{user}} = useContext(Appcontext)
  //variable ocultar botones
  const hideButtons = true
  return (
    <div className="main-container">
      <div className="hero-shopping-cart">
        <div>
          <Address user={user[0]} />
          <SendDate user={user[0]} />
          <ShoppingList hideButtons={hideButtons}/>
        </div>
        <Payment data={"Continuar"} route={"/carrocompras/payment"} />
      </div>
    </div>
  );
}
