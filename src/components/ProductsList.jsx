import React, { useState, useEffect } from "react";
//styles
import "./styles/productList.css";
//components
import ProductItem from "./ProductItem";
import Categories from "./Categories";
import Carousel from "./Carousel";
import PageLoanding from "./PageLoanding";

function ProductsList() {
  const URL = " http://localhost:3015/initalState";
  const [loanding, setLoanding] = useState(true);
  const [item, setItem] = useState([]);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await fetch(URL);
        const data = await response.json();

        return setLoanding(false), setItem(data);
      } catch (error) {
        setLoanding(false);
        console.log(error);
      }
    };
    fetchItem();
  }, []);

  const RenderList = (item = []) => {
    return (
      <>
        {item.map((items) => (
          <ProductItem key={items.id} {...items} />
        ))}
      </>
    );
  };
  if (loanding) {
    return <PageLoanding />;
  }
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
