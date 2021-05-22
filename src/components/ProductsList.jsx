import React, { useState, useEffect } from "react";
//styles
import "./styles/productList.css";
//components
import ProductItem from "./ProductItem";
import Categories from "./Categories";

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
        {item.res && item.res.length > 0 && (
          <Categories>
            <div className="carousel">
              <div className="carousel-container">
                <ProductItem />
              </div>
            </div>
          </Categories>
        )}
      </div>
    </>
  );
}

export default ProductsList;
