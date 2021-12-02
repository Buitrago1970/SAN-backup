import React, { useContext } from "react";

import "./styles/productList.css";

import ProductItem from "./ProductItem";
import Categories from "./Categories";
import Appcontext from "../context/Appcontext";
import Usesearch from "../hooks/Usesearch";

function ProductsList() {
  const search = useContext(Appcontext);
  console.log(search);

  // const RenderList = (filterList) => {
  //   return (
  //     <>
  //       {filterList.map((items) => (
  //         <ProductItem key={items.id} {...items} />
  //       ))}
  //     </>
  //   );
  // };
  return (
    <>
      <div className="list-container">
        <h1>productliust</h1>
        {/* {item.mylist && item.mylist.length > 0 && (
          <Categories>
            <Carousel>{RenderList(item.mylist)}</Carousel>
          </Categories>
        )} */}
        {/* {item.allProducts.res && item.allProducts.res.length > 0 && (
          <Categories>{RenderList(item.allProducts.res)}</Categories>
        )}
        {<Categories>{RenderList(filterList)}</Categories>} */}
      </div>
    </>
  );
}

export default ProductsList;
