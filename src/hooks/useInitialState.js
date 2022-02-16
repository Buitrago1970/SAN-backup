import { useState } from "react";

import initialState from "../initialState";
import {removeToken} from '../utils/token'
import {setToken} from '../utils/token'
import {getToken} from '../utils/token'
import axios from 'axios';

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
     setState({
       ...state,
       user: [],
       idUser:[]
     });
    removeToken();
  };
  //send order to server
   const sendOrder =  async (toatalPedido, paymentMethod,creationDate,numero_pedido, hora) => {
     setState({
      ...state,
      receipt: {
        ...state.receipt,
        toatalPedido: toatalPedido,
        paymentMethod: paymentMethod,
        creationDate: creationDate,
        numero_pedido: numero_pedido,
        hora: hora,
      },
    });
      const token = getToken();
      const url = "http://localhost:1337/api/orders"
      const data = { "data": {
                 "user": state.user[0],
                 "products": state.cart.map(item => item.slug ),
                 "total": toatalPedido,
                 "paymentMethod": paymentMethod,
                "creationDate": creationDate,
                "status": "pending",
                "numero_pedido": numero_pedido,
                "hora": hora
   }
}
try {
   const respuesta = await axios.post(url, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return respuesta;
} catch (error) {
  return false;
}
   }
  //get order from server
  const getOrder = async () => {
    const token = getToken();
    const url = "http://localhost:1337/api/orders"
    try {
        const respuesta = await axios.get(url, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          return respuesta;
    } catch (error) {
      return false;
    }
  }
  //Clear cart
  const cleanCart = () => {
    setState({
      ...state,
      cart: [],
    });
  };
  return { state, addToCart,addOneProductCart,removeOneProuctCart , removeFromCart, registerUser, loginUser, logoutUser,sendOrder ,getOrder, cleanCart};
};

export default useInitialState;
