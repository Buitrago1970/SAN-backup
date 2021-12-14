import * as React from "react";
import { BsTrash } from "react-icons/bs";
import "./styles/Item.css";

const Item = ({ item, handleRemoveFromCart }) => {
  const { name, price, measues, amount, presentation, img, totalAdd } = item;

  return (
    <>
      <div className="c">
        <div className="principal-product">
          <div className="img-container-shopping-car">
            <img className="img" src={img} alt="img" />
          </div>
          <div className="container-inf-product">
            <a href="#">
              <h2 className="name-product p-item">{name}</h2>
            </a>
            <p className="p-item">Presentación: {presentation}</p>
            <p className="kilo-value p-item">
              Valor Kilo: $ {new Intl.NumberFormat().format(price)}
            </p>
            <div className="container-buttons p-item">
              <h3>cant. {totalAdd}</h3>
            </div>
            <div className="values-product-small">
              <p>Total: </p>
              <p className="price-cart-shopping-small">${price}</p>
            </div>
            <button
              type="button"
              className="btn-delete"
              onClick={handleRemoveFromCart(item)}
            >
              <BsTrash /> Borrar Item
            </button>
          </div>
          <div className="total-price">
            <div className="values-product">
              <p className="price">
                $ {new Intl.NumberFormat().format(price * totalAdd)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
