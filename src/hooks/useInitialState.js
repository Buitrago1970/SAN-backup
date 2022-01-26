import { useState } from "react";
import { Magic } from "magic-sdk";
import { MAGIC_PUBLIC_KEY } from "../utils/urls";

import initialState from "../initialState";

const useInitialState = () => {
  let magic 
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
  const loginUser =  (payload)=>{
       setState({
       ...state,
       user: [...state.user, payload]
     })
    }
  //   const logoutUser = async () => {
  //     try {
  //       await magic.auth.logout()
  //     } catch (error) {
  //        setState({
  //       ...state,
  //       user: [],
  //     });
  //     }
  //  };
  const ckeckUser = (payload) => {
    setState({
      ...state,
      user: [...state.user, payload]
    })
  };
  // const checkUserLoggedIn =  async () => {
  //  try{
  //   const isLoggedIn = await magic.user.isLoggedIn();
    
  //   if(isLoggedIn){
  //     const {email} = await magic.user.getMetadata();
  //     setState({
  //       ...state,
  //       user: [{email}]
  //     })
  //  }  
  //   }catch(error){
  //     alert(error,'error checkUserLoggedIn')
  //   }
  // }


   
  return { state, addToCart,addOneProductCart,removeOneProuctCart , removeFromCart, loginUser,ckeckUser };
};

export default useInitialState;
