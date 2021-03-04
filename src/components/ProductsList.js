import React from "react";
import "./styles/productList.css";
import Product from "../images/7ad45b7e1d6d74dde087cd6f41f04f0b.png";

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
                  <p className="name-product">Lomo Fino</p>
                  <p className="product-weight">Cantidad: X500gr</p>
                  <span className="price">$18.000</span>
                  <div className="presentation">
                    <p>Presentation: Filete</p>
                  </div>
                </div>
              </div>
              <div className="articulo">
                <div className="img-container">
                  <img className="img-product" src={Product} alt="" />
                </div>
                <div className="description">
                  <p className="name-product">Lomo Fino</p>
                  <p className="product-weight">Cantidad: X500gr</p>
                  <span className="price">$18.000</span>
                  <div className="presentation">
                    <p>Pnpm stresentation: Filete</p>
                  </div>
                </div>
              </div>
              <div className="articulo">
                <div className="img-container">
                  <img className="img-product" src={Product} alt="" />
                </div>
                <div className="description">
                  <p className="name-product">Lomo Fino</p>
                  <p className="product-weight">Cantidad: X500gr</p>
                  <span className="price">$18.000</span>
                  <div className="presentation">
                    <p>Presentation: Filete</p>
                  </div>
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
