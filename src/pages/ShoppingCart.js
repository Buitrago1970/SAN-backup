import * as React from "react";

import { useContext } from "react";
import Appcontext from "../context/Appcontext";
import Address from "../components/Address";
import ShoppingList from "../components/ShoppingList";
import Payment from "../components/Payment";
import "./styles/ShoppingList.css";

export default function ShoppingCart() {
  const {
    state: { cart, user },
  } = useContext(Appcontext);
  return (
    <div className="main-container">
      <div className="hero-shopping-cart">
        <div>
          <Address user={user[0]}/>
          <ShoppingList />
        </div>
        {!cart.length ? (null) : ( <Payment data={"Continuar"} route={"/carrocompras/{}/checkout"}/>)}
      </div>
    </div>
  );
}
