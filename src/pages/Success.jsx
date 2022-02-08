import React from 'react';

import "./styles/Success.css";

import successIcon from "../images/Unknown.png"; 
export default function Success() {
  return (
      <>
      <div className='main-container main-container-success'>
          <div className='success-container'>
            <div className='info-success-order'>
                <div className='image-title'>
                    <div className='img-container'>
                        <img src={successIcon} alt="" />
                    </div>
                    <h1>¡Gracias por tu compra!</h1>
                </div>
                <div className='info-container'>
                
                    <h3>DETALLES DEL PEDIDO</h3>
                    <p className='p-info-success-order'>Número de pedido: <span>#123456789</span></p>
                    <p className='p-info-success-order'>Fecha de pedido: <span>12/12/2019</span></p>
                    <p className='p-info-success-order'>Estado del pedido: <span>En proceso</span></p>
                    <p className='p-info-success-order'>Total: <span>$100.00</span></p>
                    <p className='p-info-success-order'>Entrega estimada: <span> 24 diciembre</span></p>
            </div>

            </div>
            <div className='buttons-mail-info'>
                <div className='buttons-success'>
                    <button className='btn-success'>
                        Ver mis pedidos
                    </button>
                    <button className='btn-success'>
                     
                        Descargar Recibo Compra
                    </button>    
            </div>
            </div>

            <p className='p-info-end-succes-container'>❗️Le enviaremos por correo electronico una confirmacion del pedido con detalles e informacion de seguimiento.</p>
            </div>

      </div>
      </>
  );
}
