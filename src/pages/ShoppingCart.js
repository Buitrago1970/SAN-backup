import * as React from "react";

import { useContext } from "react";
import { Link } from "react-router-dom";
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
      {cart.length > 0 ? (<div className="hero-shopping-cart">
        <div>
          <Address user={user[0]} cart={cart}/>
          <ShoppingList />
        </div>
        <Payment PATH={'Shopping-cart'}/>

      </div>) :
      (<div className="empty-cart-button">
          <h3>🛒Tu carrito está vacío. </h3>{" "}
          <Link className="link-home" to="/">
            Ir al Home
          </Link>
        </div>)
        }
      
    </div>
  );
}
