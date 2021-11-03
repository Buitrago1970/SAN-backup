import React, { useContext } from "react";

// components
import ProductItem from "./ProductItem";
import Categories from "./Categories";
import Carousel from "./Carousel";
import Appcontext from "../context/Appcontext";

// styles
import "./styles/productList.css";

function ProductsList() {
  const item = useContext(Appcontext);
  
  const RenderList = (item = []) => {
    return (
      <>
        {item.map((items) => (
          <ProductItem key={items.id} {...items} />
        ))}
      </>
    );
  };
  return (
    <>
      <div className="list-container">
        {item.mylist && item.mylist.length > 0 && (
          <Categories>
            <Carousel>{RenderList(item.mylist)}</Carousel>
          </Categories>
        )}
        {item.res && item.res.length > 0 && (
          <Categories>
            <Carousel>{RenderList(item.res)}</Carousel>
          </Categories>
        )}
        {item.chicken && item.chicken.length > 0 && (
          <Categories>
            <Carousel>{RenderList(item.chicken)}</Carousel>
          </Categories>
        )}
      </div>
    </>
  );
}

export default ProductsList;
