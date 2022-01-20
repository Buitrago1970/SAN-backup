import * as React from "react";
import { useState, useContext } from "react";
import "./styles/Item.css";
import Appcontext from "../context/Appcontext";
import { fromImageToUrl } from "../utils/urls";



const Item = ({ item, handleRemoveFromCart , hideButtons}) => {
  const {
    addOneProductCart,   
    removeOneProuctCart, 
  } = useContext(Appcontext);

  const { name, price, amount, presentation, image, totalAdd } = item;
  const [count, setCount] = useState(totalAdd);


  const handlesAddToCart = (valor, product) => {
    if(valor === 'menos'){
      if(count > 1){
        setCount(count - 1);
        removeOneProuctCart(product);
      }
    }else if(valor === 'mas'){
      setCount(count + 1);
      addOneProductCart(product );
    }
  }
  return (
    <>
      <div className="c">
        <div className="principal-product">
          <div className="img-container-shopping-car">
            <img className="img" src={fromImageToUrl(image.data.attributes.formats.small)} alt="img" />
          </div>
          <div className="container-inf-product">
            <div className="container-inf-product-title">
              <p className="name-product p-item">{name}</p>
              <p className="title-product-measues">{`(${amount} g)`}</p>
            </div>
   
            <p className="p-item">Presentación: {presentation}</p>
            <p className="kilo-value">
              Valor Kilo: $ {new Intl.NumberFormat().format(price)}
            </p>
            <div className="values-product-small">
              <p>Total: </p>
              <p className="price-cart-shopping-small">${price}</p>
            </div>
            {hideButtons ? null : (  <button
              type="button"
              className="btn-delete"
              onClick={handleRemoveFromCart(item)}
            >
              Eliminar
            </button>)}
          
          </div>
          { hideButtons ? null : (          <div className="container-buttons-shoping-cart">
            <button
              type="button"
              className="bt-menos"
              onClick={() => handlesAddToCart('menos', item)}
              >
              -
            </button>
            <div className="container-counter-shoping-cart">
              <p className="counter-quantity-products">{count}</p>
            </div>

            <button
              type="button"
              className="bt-mas"
              onClick={() => handlesAddToCart('mas', item)}
            >
              +
            </button>
          </div>)}

          
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
