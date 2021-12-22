import React, { useContext } from "react";
import "./styles/ShoppingList.css";
import Item from "./Item";
import Appcontext from "../context/Appcontext";
import { Link } from "react-router-dom";

export default function ShoppingCart() {
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
          {/* <h2>Carro Compras</h2> */}
          <br />
          <div className="shopping-list">
            <p className="cart-length-title">Carrito ({cart.length})</p>
            {/* <hr /> */}
            <div className="secondary-title">
              <p></p>
              {/* <p className="title-price">Precio</p> */}
            </div>
            <div>
              {cart.map((item) => (
                <Item
                  key={item.id}
                  item={item}
                  handleRemoveFromCart={handleRemoveFromCart}
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
