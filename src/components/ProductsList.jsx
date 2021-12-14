import React, { useState, useContext, useEffect } from "react";

import "./styles/productList.css";

import ProductItem from "./ProductItem";
import Categories from "./Categories";
import Appcontext from "../context/Appcontext";

function ProductsList({ search }) {
  const {
    state: { products },
    addToCart,
  } = useContext(Appcontext);

  const [filterList, setFilterList] = useState(products);

  const handleAddToCart = (product, count) => () => {
    addToCart(product, count);
  };

  useEffect(() => {
    if (search === "") {
      setFilterList(products);
    } else {
      setFilterList(
        products.filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [search, products]);

  const RenderList = (List) => {
    return (
      <>
        <div className="container-products">
          {List.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </>
    );
  };
  return (
    <>
      <div className="list-container">
        {filterList && <Categories>{RenderList(filterList)}</Categories>}
      </div>
    </>
  );
}

export default ProductsList;
