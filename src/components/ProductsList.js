import React from "react";
import "./styles/productList.css";
import Product from "../images/carne.jpg";

class ProductsList extends React.Component {
  render() {
    return (
      <>
        <div className="list-container">
          <div className="row-container">
            <div className="title-container">
              <hr className="line-indicator-products" />
              <h1 className="title-presentation-products">carne</h1>
              <hr className="line-indicator-products" />
            </div>

            <div className="carousel-container">
              <div className="articulo">
                <div className="img-container">
                  <img className="img-product" src={Product} alt="" />
                </div>
                <div className="description">
                  <h2 className="name-product">Lomo Fino</h2>
                  <div className="product-weight">
                    <p className="product-quantity">cantidad</p>
                    <p className="product-quantity weigth">X 500g</p>
                  </div>

                  <div className="preparation-container">
                    <h3 className="preparation-product">
                      Empaque: Vacio y Congelado -4°C
                    </h3>
                    <h3 className="presentation-product">
                      Presentación: Filete
                    </h3>
                    <hr />
                  </div>
                  <div className="price-container">
                    <span className="price">$18.000</span>
                  </div>

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

                  <div className="presentation-container">
                    <p className="presentation-paragraph">
                      presentation: Filete
                    </p>
                  </div>
                  <button className="btn-shop">Añadir</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ProductsList;
