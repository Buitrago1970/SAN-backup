import { useState } from "react";


import initialState from "../initialState";

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (product, count) => {
    const productExists = state.cart.find((item) => item.slug === product.slug);
    if (productExists) {
      setState({
        ...state,
        cart: state.cart.map((item) =>
          item.slug === product.slug
            ? { ...item, totalAdd: (item.totalAdd = item.totalAdd + count) }
            : item
        ),
      });
    } else {
      setState({
        ...state,
        cart: [
          ...state.cart,
          { ...product, totalAdd: product.totalAdd + count  },
        ],
      });
    }
  };
  const addOneProductCart = (product) => {
    const productExists = state.cart.find(
      (item) => item.slug === product.slug
    );
    if (productExists) {
      setState({
        ...state,
        cart: state.cart.map((item) =>
          item.slug === product.slug
            ? { ...item, totalAdd: (item.totalAdd = item.totalAdd + 1) }
            : item
        ),
      });
    } else {
      setState({
        ...state,
        cart: [...state.cart, { ...product, totalAdd: 1 }],
      });
    }
  };
  const removeOneProuctCart = (product) => {
    const productExists = state.cart.find((item) => item.slug === product.slug);
    if (productExists.totalAdd === 1) {
      setState({
        ...state,
        cart: state.cart.filter((item) => item.slug !== product.slug),
      });
    } else {
      setState({
        ...state,
        cart: state.cart.map((item) =>
          item.slug === product.slug
            ? { ...item, totalAdd: (item.totalAdd = item.totalAdd - 1) }
            : item
        ),
      });
    }
  };
  const removeFromCart = (product) => {
    setState({
      ...state,
      cart: state.cart.filter((item) => item.slug !== product.slug),
    });
  };
  const registerUser =  (payload)=>{
    setState({
      ...state,
      user: [ ...state.user, payload]
    })
  }
   
  return { state, addToCart,addOneProductCart,removeOneProuctCart , removeFromCart, registerUser };
};

export default useInitialState;
