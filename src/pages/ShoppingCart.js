import React from "react";

import Address from "../components/Address";
import ShoppingList from "../components/ShoppingList";
import Payment from "../components/Payment";
import "./styles/ShoppingList.css";

export default function ShoppingCart() {
  return (
    <div className="main-container">
      <div className="hero-shopping-cart">
        <div>
          <Address />
          <ShoppingList />
        </div>
        <Payment data={"Proceder al pago"} />
      </div>
    </div>
  );
}
