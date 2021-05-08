import React from "react";

//styles
import "./styles/productList.css";
//components
import ProductItem from "./ProductItem";
class ProductsList extends React.Component {
  state = {
    data: [
      {
        id: "01",
        name: "Lomo Limpio",
        price: 38000,
        uniti: "kilogramo",
        amount: "500g",
        presentation: "Filete",
        img: "../images/carne.jpg",
      },
      {
        id: "02",
        name: "Lomo Corriente",
        price: 33000,
        uniti: "kilogramo",
        amount: "500g",
        presentation: "Filete",
      },
      {
        id: "03",
        name: "Chatas En Posta",
        price: "24.000",
        uniti: "kilogramo",
        amount: "500g",
        presentation: "Filete",
      },
      {
        id: "04",
        name: "Churrasco",
        price: 26000,
        uniti: "kilogramo",
        amount: "500g",
        presentation: "Filete",
      },
      {
        id: "05",
        name: "PUNTA DE ANCA",
        price: 26000,
        uniti: "kilogramo",
        amount: "500g",
        presentation: "Filete",
      },
    ],
  };
  render() {
    return (
      <>
        <div className="list-container">
          <div className="categories-title-container">
            <hr className="line-indicator-products" />
            <h1 className="categories-title">carne </h1>
            <hr className="line-indicator-products" />
          </div>
          <div className="carousel">
            <div className="carousel-container">
              <ProductItem product={this.state.data} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ProductsList;
