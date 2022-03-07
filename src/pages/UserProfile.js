import * as React from 'react';
 import {   useContext, } from 'react';
import Appcontext from '../context/Appcontext';
import { useHistory } from 'react-router-dom';

export default function UserProfile() { 
  const history = useHistory();
  const {logoutUser} = useContext(Appcontext);
  const handleLogout = () => {
    logoutUser();
    history.push('/');
  }
  return (<>
  
  <div>
      <button onClick={()=>{handleLogout()}}>
          Cerrar Sesion
      </button>
      <div className="orders">
          <h1>Ordenes</h1>
          <div className="orders-title">Mis pedidos</div>
          <div className="orders-data">
            <p>Lista de pedidos</p>
          </div>
        </div>                

  </div>
  </>);
}
