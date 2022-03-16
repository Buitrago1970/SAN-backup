import * as React from 'react';
import { useContext } from 'react';

import "./styles/Success.css";
import Appcontext from '../context/Appcontext';

import successIcon from "../images/ok.png"; 
export default function Success() {
    const {state:{ receipt }} = useContext(Appcontext);
    return (
      <>
      <div className='main-container main-container-success'>
          <div className='success-container'>
            <div className='info-success-order'>
                <div className='image-title'>
                    <div className='img-container-success'>
                        <img src={successIcon} alt="" />
                    </div>
                    <h1>¡Gracias por tu compra!</h1>
                </div>
                <div className='info-container'>
                
                    <h3>DETALLES DEL PEDIDO</h3>
                    <p className='p-info-success-order'>Número de pedido: <span>#{receipt.numero_pedido}</span></p>
                    <p className='p-info-success-order'>Fecha de pedido: <span>{receipt.creationDate}</span></p>
                    <p className='p-info-success-order'>Estado del pedido: <span>En proceso</span></p>
                    <p className='p-info-success-order'>Total: <span>${receipt.toatalPedido}</span></p>
                    <p className='p-info-success-order'>Entrega estimada: <span> {receipt.dateSend}</span></p>
            </div>

            </div>
            <div className='buttons-mail-info'>
                <div className='buttons-success'>
                    {/* <button className='btn-success'>
                        Ver mis pedidos
                    </button> */}
                    <button className='btn-success' >
                        Descargar Recibo Compra
                    </button>    
                   
            </div>
            </div>

            {/* <p className='p-info-end-succes-container'>❗️Le enviaremos por correo electronico una confirmacion del pedido con detalles e informacion de seguimiento.</p> */}
            <p className='p-info-end-succes-container'>cell +57 310-570-6238 ⎮ tel 6746457 ⎮ correo juan@hotmail.com ⎮</p>
            <p ></p>
            </div>

      </div>
      </>
  );
}
