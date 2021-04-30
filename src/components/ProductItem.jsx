import React from "react";

import "./styles/productList.css";
import Product from "../images/carne.jpg";
class ProductItem extends React.Component {
  render() {
    return (
      <>
        {this.props.product.map((articulo) => {
          return (
            <div className="articulo" key={articulo.id}>
              {/* imagen */}
              <div className="img-container">
                <img className="img-product" src={Product} alt="" />
              </div>
              {/* texto */}
              <div className="description">
                {/* nombre */}
                <h2 className="name-product">{articulo.name}</h2>

                {/* peso */}
                <div className="product-weight">
                  <p className="product-quantity">cantidad</p>
                  <p className="product-quantity weigth">x{articulo.amount}</p>
                </div>
                <br />
                {/* empaque */}
                <div className="preparation-container">
                  <h3 className="preparation-product">
                    Empaque: Vacio y Congelado -4°C
                  </h3>
                  <h3 className="presentation-product">
                    Presentación: {articulo.presentation}
                  </h3>
                  <hr />
                </div>

                {/* precio */}
                <div className="price-container">
                  <span className="price">${articulo.price}</span>
                </div>

                {/* botones */}
                <div className="container-buttons">
                  <a href="#" className="bt-">
                    -
                  </a>

                  <div className="container-counter">
                    <p className="counter-quantity-products">1</p>
                  </div>
                  <a href="#" className="bt- bt-mas">
                    +
                  </a>
                </div>

                {/* presentacion movile */}
                <div className="presentation-container">
                  <p className="presentation-paragraph">presentation: Filete</p>
                </div>

                {/* boton añadir */}
                <button className="btn-shop">Añadir</button>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}

export default ProductItem;
