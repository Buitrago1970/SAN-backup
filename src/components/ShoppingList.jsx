import React from "react";
import "./styles/ShoppingList.css";
import Item from "./Item";

export default function ShoppingCart() {
  return (
    <>
      <div className="shopping-list">
        <div className="secondary-title">
          <div className="secondary-title">Opciones de envío a</div>
          <p>Precio</p>
        </div>
        <div className="List">
          <Item />
        </div>
      </div>
    </>
  );
}
