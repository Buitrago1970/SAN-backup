import React, { useContext } from "react";
import "./styles/ShoppingList.css";
import Item from "./Item";
import Appcontext from "../context/Appcontext";
import { Link } from "react-router-dom";

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
      {cart.length > 0 ? (
        <>
          <br />
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
      ) : (
        <div className="empty-cart-button">
          <h3>Tu carrito está vacío. </h3>{" "}
          <Link className="link-home" to="/">
            Ir al Home
          </Link>
        </div>
      )}
    </>
  );
}
