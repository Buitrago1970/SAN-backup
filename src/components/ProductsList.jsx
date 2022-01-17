import React, { useState, useContext, useEffect } from "react";

import "./styles/productList.css";

import ProductItem from "./ProductItem";
import Categories from "./Categories";
import Appcontext from "../context/Appcontext";
import axios from "axios";

function ProductsList({ search }) {
  const {
    addToCart,    
  } = useContext(Appcontext);
  const [products, setProducts] = useState([]);
  const [filterList, setFilterList] = useState([]);

  //fetch the products from api
   useEffect( () => {
    const fetchProducts = async () => {
     const response = await axios("http://localhost:1337/api/products");
     setProducts(response.data.data)
    };
    fetchProducts();
  }, []);
  
  //filter the products based on the search text
  useEffect(() => {
    if (search === "") {
      setFilterList(products);
    } else {
      setFilterList(
        products.filter(item => item.attributes.name.toLowerCase().includes(search.toLowerCase())),
      );
    }
  }, [search, products]);

  const handleAddToCart = (product, count) => () => {
    addToCart(product, count);
  };

  const RenderList = (List) => {
    return (
      <>
        <div className="container-products">
          {List.map((product) => (
            <ProductItem
              key={product.attributes.slug}
              product={product.attributes}
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
        {filterList.length === 0 ? (
        <div className="container-search-not-found">
          <h3 className="text-not-found">
          ⚠️ No se encontraron resultados para 
          </h3>

          <h3 className="text-not-found">
           "{search}"
          </h3>
          </div>):(<Categories>{RenderList(filterList)}</Categories>)}
      </div>
    </>
  );
}

export default ProductsList;
