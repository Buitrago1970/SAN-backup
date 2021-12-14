import { useState } from "react";
import initialState from "../initialState";

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (product, count) => {
    const productExists = state.cart.find((item) => item.id === product.id);

    if (productExists) {
      setState({
        ...state,
        cart: state.cart.map((item) =>
          item.id === product.id
            ? { ...item, totalAdd: (item.totalAdd = item.totalAdd + count) }
            : item
        ),
      });
    } else {
      setState({
        ...state,
        cart: [
          ...state.cart,
          { ...product, totalAdd: product.totalAdd + count + 1 },
        ],
      });
    }
  };
  const removeFromCart = (product) => {
    setState({
      ...state,
      cart: state.cart.filter((item) => item.id !== product.id),
    });
  };
  return { addToCart, removeFromCart, state };
};

export default useInitialState;
