import * as React from 'react';

import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {getToken} from '../utils/token'

import axios from 'axios';



import "./styles/UserProfile.css"
import Appcontext from '../context/Appcontext';

export default function UserProfile() {
  const history = useHistory();
  const { logoutUser } = useContext(Appcontext);
  const token = getToken();


  const url = " "
  useEffect(()  => {
    (async () =>{
      try {
        const respuesta = await axios.post(url, {
           headers: {
             Authorization: `Bearer ${token}`,
           },
         })
         return respuesta;
     } catch (error) {
       return false;
     }
    })()
    },[]);

  const handleLogout = () => {
    logoutUser();
    history.push('/');
  }


  return (<>
    <div>
      <div className="orders">
        <h1 className="orders-title">Ordenes</h1>
        <p className='orders-secondary-title'>Mis pedidos</p>
        <div className='container-order'>
          <div className='item-order'>
            <div className='container-p-date-order'>
              <p className='p-date-item-order'>Fecha Q el pedido fue echo</p>
            </div>
            <div className='info-order'>
              <div className='img-container-shopping-car'>
                <img src='https://san-ecommerce.s3.amazonaws.com/small_image_not_found_scaled_1150x647_8fc97ab876.png' alt=''></img>
              </div>
              <div className='text-info-order'>
                <p className='status-order'>STATUS DEL PEDIDO</p>
                <p className='delivery-order-date'>FECHA DE ENTREGA</p>
                <p className='total-order'>TOTAL DEL PEDIDO: $######</p>
                <p className='products-order'>PRODUCTOS TOTALES</p>
              </div>
              <div className='secondary-info-order'>
                <p>NUMERO DE PEDIDO: XXXXXXXXXXXXX</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className='btn-close-session' onClick={() => { handleLogout() }}>
        Cerrar Sesion
      </button>
    </div>
  </>);
}
