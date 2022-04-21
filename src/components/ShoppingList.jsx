import React, { useContext } from "react";
import "./styles/ShoppingList.css";
import Item from "./Item";
import Appcontext from "../context/Appcontext";

export default function ShoppingCart({hideButtons}) {
  const {
    state: { cart },
    removeFromCart,
  } = useContext(Appcontext);

  const handleRemoveFromCart = (product) => () => {
    removeFromCart(product);
  };

  return (
    <>
          <div className="shopping-list">
            <p className="cart-length-title">Carrito ({cart.length})</p>
            <div>
              {cart.map((item) => (
                <Item
                  key={item.slug}
                  item={item}
                  handleRemoveFromCart={handleRemoveFromCart}
                  hideButtons={hideButtons}
                />
              ))}
            </div>
          </div>
    </>
  );
}
