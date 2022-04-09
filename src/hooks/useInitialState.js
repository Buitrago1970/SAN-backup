import { useState } from "react";

import initialState from "../initialState";
import {removeToken} from '../utils/token'
import {setToken} from '../utils/token'
import {getToken} from '../utils/token'
import axios from 'axios';

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (product, count) => {
    const productExists = state.cart.find((item) => item.Slug === product.Slug);
    if (productExists) {
    
      setState({
        ...state,
        cart: state.cart.map((item) =>
          item.Slug === product.Slug
            ? { ...item, total_anadidos_de_productos: (item.total_anadidos_de_productos = item.total_anadidos_de_productos + count) }
            : item
        ),
      });
    } else {
  
      setState({
        ...state,
        cart: [
          ...state.cart,
          { ...product, total_anadidos_de_productos: product.total_anadidos_de_productos + count  },
        ],
      });
    }
  };
  const addOneProductCart = (product) => {
    const productExists = state.cart.find(
      (item) => item.Slug === product.Slug
    );
    if (productExists) {
      setState({
        ...state,
        cart: state.cart.map((item) =>
          item.Slug === product.Slug
            ? { ...item, total_anadidos_de_productos: (item.total_anadidos_de_productos = item.total_anadidos_de_productos + 1) }
            : item
        ),
      });
    } else {
      setState({
        ...state,
        cart: [...state.cart, { ...product, total_anadidos_de_productos: 1 }],
      });
    }
  };
  const removeOneProuctCart = (product) => {
    const productExists = state.cart.find((item) => item.Slug === product.Slug);
    if (productExists.total_anadidos_de_productos === 1) {
      setState({
        ...state,
        cart: state.cart.filter((item) => item.Slug !== product.Slug),
      });
    } else {
      setState({
        ...state,
        cart: state.cart.map((item) =>
          item.Slug === product.Slug
            ? { ...item, total_anadidos_de_productos: (item.total_anadidos_de_productos = item.total_anadidos_de_productos - 1) }
            : item
        ),
      });
    }
  };
  const removeFromCart = (product) => {
    setState({
      ...state,
      cart: state.cart.filter((item) => item.Slug !== product.Slug),
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
  const logoutUser = ( ) => {
    removeToken();
     setState({
       ...state,
       user: [],
       idUser:[]
     });
     //recaargar pagina
      window.location.reload();
  };
  //set date send
  const setDateSend = (date) => {
    setState({
      ...state,
      receipt:{
        ...state.receipt,
        dateSend: date
      }
    });
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
      const url = process.env.REACT_APP_API_URL_SEND_ORDER
      const data = { "data": {
                 "user": state.user[0],
                 "products": state.cart.map(item => item.Slug ),
                 "total": toatalPedido,
                 "metodo_de_pago": paymentMethod,
                "fecha_de_creacion": creationDate,
                "status": "pending",
                "numero_de_pedido": numero_pedido,
                "hora": hora,
                "fecha_de_envio": state.receipt.dateSend
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
  const getOrder = async (numero_pedido) => {
    const token = getToken();
    const url = `${process.env.REACT_APP_API_URL_SEND_ORDER}[numero_de_pedido]=${numero_pedido}`
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
  //save order response data
  const saveOrder = (data) => {
    setState({
      ...state,
      receipt: {
        data: data,
      },
      user: [ ...state.user],
      idUser:[ ...state.idUser],
      cart:[]
    });
  }
  return { state, addToCart,addOneProductCart,removeOneProuctCart , removeFromCart, registerUser, loginUser, logoutUser,sendOrder ,getOrder,setDateSend,saveOrder};
};

export default useInitialState;
