import React, { useState, useContext, useEffect } from "react";

import "./styles/productList.css";

import ProductItem from "./ProductItem";
import Categories from "./Categories";
import SkeletonComponent from "../components/SkeletonComponent"

import Appcontext from "../context/Appcontext";

import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";


function ProductsList({ search }) {
const INITIAL_PAGE = 1;

const [page, setPage] = useState(INITIAL_PAGE);
const [hasMore , setHasMore] = useState(true);
const [loader, setLoader] = useState(true)

const qs = require('qs');


  const {addToCart} = useContext(Appcontext);
  const [products, setProducts] = useState([]);
  const [filterList, setFilterList] = useState([]);

  //fetch the products from api
   useEffect( () => {
   const query = qs.stringify({
        pagination: {
         page: page,
        },
    });    
      const fetchProducts = async () => { 
        const response = await axios(`https://backendsan.herokuapp.com/api/products?populate=image&${query}`);        setHasMore(response.data.meta.pagination.pageCount > page);
        setProducts(products.concat(response.data.data));
        setLoader(false)
  }
 fetchProducts();
  }, [page, qs]);

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
      <InfiniteScroll dataLength={products.length} hasMore={hasMore} next={()=>setPage( (prevPage)=>  prevPage + 1 )}>
        <div className="container-products">
            {List.map((product) => (
             <ProductItem
               key={product.attributes.Slug}
               product={product.attributes}
                handleAddToCart={handleAddToCart}
              />
            ))}
        </div>
      </InfiniteScroll>
      </>
    );
  };
  if(loader){
    return <SkeletonComponent/>
  }else{
  return (

      <div className="list-container">
        {filterList.length === 0 ? (
        <div className="container-search-not-found">
          <h3 className="text-not-found">
          ⚠️ No se encontraron resultados para 
          </h3>

          <h3 className="text-not-found">
           "{search}"
          </h3>
          </div>):(
          <Categories>{RenderList(filterList)}</Categories>
          )}
      </div>
    
  );
}
}

export default ProductsList;
