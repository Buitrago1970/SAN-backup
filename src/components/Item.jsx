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

  const { name, precio, cantidad,presentacion , total_anadidos_de_productos,valor_kilo } = item;
  const [count, setCount] = useState(total_anadidos_de_productos);


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
            <img className="img" src={fromImageToUrl(item.image.data[0].attributes.formats.small)} alt="img" />
          </div>
          <div className="container-inf-product">
            <div className="container-inf-product-title">
              <p className="name-product">{name}</p>
              <p className="title-product-measues">{`(${cantidad} g)`}</p>
             
            </div>
             <p className="p-item">Empaque: {presentacion}</p>
            <p className="p-item">Presentación: {presentacion}</p>
            <p className="kilo-value">
              Valor Kilo: $ {new Intl.NumberFormat().format(valor_kilo)}
            </p>
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
              className="bt-menos bt-shopping-cart"
              onClick={() => handlesAddToCart('menos', item)}
              >
              -
            </button>
            <div className="container-counter-shoping-cart">
              <p className="counter-quantity-products">{count}</p>
            </div>

            <button
              type="button"
              className="bt-mas bt-shopping-cart"
              onClick={() => handlesAddToCart('mas', item)}
            >
              +
            </button>
          </div>)}
          <div className="total-price">
            <div className="values-product">
              <p className="price">
                $ {new Intl.NumberFormat().format(precio * total_anadidos_de_productos)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
