import * as React from "react";

import { useContext } from "react";
import Appcontext from "../context/Appcontext";
import Address from "../components/Address";
import ShoppingList from "../components/ShoppingList";
import Payment from "../components/Payment";
import "./styles/ShoppingList.css";

export default function ShoppingCart() {
  const {
    state: { cart },
  } = useContext(Appcontext);
  return (
    <div className="main-container">
      <div className="hero-shopping-cart">
        <div>
          <Address />
          <ShoppingList />
        </div>
        {!cart.length ? ( <br></br>) : ( <Payment data={"Proceder al pago"} route={"/carrocompras/{}/direccion"}/>)}
      </div>
    </div>
  );
}
