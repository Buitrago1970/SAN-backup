import React, { useState, useEffect } from "react";
//styles
import "./styles/productList.css";
//components
import ProductItem from "./ProductItem";

function ProductsList() {
  const URL = "http://localhost:3000/initalState";

  const [item, setItem] = useState([]);
  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await fetch(URL);
        const data = await response.json;
        return setItem(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchItem();
  }, []);
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
            <ProductItem product={item} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductsList;
