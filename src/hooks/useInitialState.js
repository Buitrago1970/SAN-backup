import { useState } from "react";

import initialState from "../initialState";
import {removeToken} from '../utils/token'
import {setToken} from '../utils/token'
import {getToken} from '../utils/token'
import { handleSumTotal } from "../utils";

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
  //register user
  const registerUser =  (payload)=>{
    setToken(payload.jwt)
    setState({
      ...state,
      user: [ ...state.user, payload.user], 
    })
  }
  //login user

 const loginUser =  (payload, idUSer)=>{
   setState({
    ...state,
    user: [ ...state.user, payload],
    idUser:[ ...state.idUser, idUSer]  
   })
 }
  //logout user
  const logoutUser = () => {
    removeToken();
    setState({
      ...state,
      user: [],
      idUser:[]
    });
  };

  //set payment method
  const setPaymentMethod = (payload) => {
    setState({
      ...state,
      paymentMethod: [...state.paymentMethod, payload],
    });
  };

  //send order to server
   const sendOrder = async (payload) => {
     debugger 
      const token = getToken();
      const url = "http://localhost:1337/api/orders"
      const data = { "data": {
                 "user": state.user[0],
                 "products": state.cart.map(item => item.slug),
                 "total": handleSumTotal(state.cart) ,
                 "paymentMethod": state.paymentMethod[0],
                 "status": "pending",
   }
}
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
          },
          body: JSON.stringify(data),
      })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
   }


  return { state, addToCart,addOneProductCart,removeOneProuctCart , removeFromCart, registerUser, loginUser, logoutUser,setPaymentMethod,sendOrder };
};

export default useInitialState;
