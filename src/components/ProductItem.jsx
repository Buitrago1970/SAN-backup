import * as React from "react";
import { useState } from "react";

import "./styles/ProductItem.css";
import { fromImageToUrl } from "../utils/urls";


const ProductItem = ({ product, handleAddToCart }) => {
  const [count, setCount] = useState(1);

  const handlesAddToCart = (valor) => {
    if(valor === 'menos'){
      if(count > 1){
        setCount(count - 1);
      }
    }else if(valor === 'mas'){
      setCount(count + 1);
    }
  }
  return (
    <>
      <div className="articulo">
        {/* imagen */}
        <div className="img-container">
          <img className="img-product" src={fromImageToUrl(product.image)} alt="" />
        </div>
        {/* texto */}
        <div className="description">
          {/* nombre */}
          <h2 className="name-product_">{product.name}</h2>

          {/* peso */}
          <div className="product-weight">
            <p className="product-quantity">cantidad</p>
            <p className="product-quantity weigth">X {product.amount}g</p>
          </div>
          <br />
          {/* empaque */}
          <div className="preparation-container">
            <h3 className="preparation-product">
              Empaque: Vacio y Congelado -4°C
            </h3>
            <h3 className="presentation-product">
              Presentación: {product.presentation}
            </h3>
            <hr />
          </div>

          {/* precio */}
          <div className="price-container">
            <span className="price">
              ${new Intl.NumberFormat().format(product.price)}
            </span>
          </div>

          {/* botones */}
          <div className="container-buttons">
            <button
              type="button"
              className="bt-menos"
              onClick={() => handlesAddToCart("menos")}
            >
              -
            </button>

            <div className="container-counter">
              <p className="counter-quantity-products">{count}</p>
            </div>
            <button
              type="button"
              className="bt-mas"
              onClick={() => handlesAddToCart("mas")}
            >
              +
            </button>
          </div>

          {/* presentacion movile */}
          <div className="presentation-container">
            <p className="presentation-paragraph">presentation: Filete</p>
          </div>

          {/* boton añadir */}
          <button
            className="btn-shop"
            onClick={handleAddToCart(product, count)}
          >
            Añadir al carrito
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
