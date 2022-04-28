import * as React from 'react'
import { useContext } from "react";

import {setAddress, getAddress} from "../utils/address"
import { useHistory } from "react-router-dom";
import FormAddress from "../components/FormAddress.jsx"
import Appcontext from '../context/Appcontext.js';


export default function ModifiedAddress() {

    const { sendAdress} = useContext(Appcontext)
    const localStorageAddress = getAddress()
    const history = useHistory()

    const enviarNuevaDirrecion  = async (valuesAdress) =>{
        const respuestaPostAddress = await sendAdress(valuesAdress)
        if(respuestaPostAddress.status === 200){
          setAddress(valuesAdress)
          // deleteOldAddress()
          history.push('/carrocompras/payment')
        }else{
            alert('no funciono')
        }
    }

  return (
    <FormAddress localStorageAddress={localStorageAddress} message={'modified'} enviarNuevaDirrecion={enviarNuevaDirrecion}/>
  )
}
