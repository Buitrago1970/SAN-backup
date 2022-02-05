import { useState } from "react";

import initialState from "../initialState";
import {removeToken} from '../utils/token'
import {setToken} from '../utils/token'
import axios from 'axios'

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
   const sendOrder =  (payload) => {
     axios 
     .post('http://localhost:1337/api/orders', {
        user: '5f4c9f8b8b9e7a0f8c8b8b8b',
        products: 'xd',
        total: 5,
        paymentMethod: payload,
        status: 'pending',
     })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      }
      );
   }

  return { state, addToCart,addOneProductCart,removeOneProuctCart , removeFromCart, registerUser, loginUser, logoutUser,setPaymentMethod,sendOrder };
};

export default useInitialState;
