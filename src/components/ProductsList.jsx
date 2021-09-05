import React, { useState, useContext, useEffect } from "react";

//components
import ProductItem from "./ProductItem";
import Categories from "./Categories";
import Carousel from "./Carousel";
import PageLoanding from "./PageLoanding";
import Appcontext from "../context/Appcontext";

//styles
import "./styles/productList.css";
import "./styles/navbar.css";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";

function ProductsList() {
  const initialState = {
    res: [
      {
        id: "01",
        name: "Lomo Limpio",
        price: "38.000",
        measues: "kilogramo",
        amount: "500g",
        presentation: "Filete",
        img: "http://dummyimage.com/800x600.png/99118E/ffffff",
      },
      {
        id: "03",
        name: "Chatas En Posta",
        price: "24.000",
        uniti: "kilogramo",
        amount: "500g",
        presentation: "Filete",
        img: "http://dummyimage.com/800x600.png/99118E/ffffff",
      },
    ],
  };
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
  // if (loanding) {
  //   return <PageLoanding />;
  // }
  return (
    <>
      <nav>
        <div className="search">
          <div className="container-serch">
            <span className="icon">
              <i className="fa fa-search">
                <AiOutlineSearch />
              </i>
            </span>
            <input
              onChange={(value) => {}}
              type="text"
              id="search"
              placeholder="Buscar..."
            />
          </div>
        </div>
        <div className="container-shopping-cart-nav">
          <Link to="/carroCompras">
            <FiShoppingCart className="shopping-cart-nav" />
          </Link>
        </div>
      </nav>
      <h1 className="principal-title">Carniceria Online</h1>
      <h3 className="title-secondary">surticarnes san diego</h3>
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
