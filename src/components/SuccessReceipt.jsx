import * as React from 'react';

import "./styles/Success.css";
import { Link } from "react-router-dom";

import successIcon from "../images/ok.png";
class SuccessReceipt extends React.Component {
    render(){
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
                          
                           <p className='p-info-success-order'>Número de pedido: <span>#{this.props.receipt.data.numero_de_pedido}</span></p>
                          <p className='p-info-success-order'>Fecha de pedido: <span>{this.props.receipt.data.fecha_de_creacion}</span></p>
                          <p className='p-info-success-order'>Estado del pedido: <span>{this.props.receipt.data.status === "pending" && 'Proceso'}</span></p>
                          <p className='p-info-success-order'>Total: <span>${this.props.receipt.data.total}</span></p>
                          <p className='p-info-success-order'>Entrega estimada: <span> {this.props.receipt.data.fecha_de_envio}</span></p> 
                  </div>
      
                  </div>
                  <div className='buttons-mail-info'>
                      <div className='buttons-success'>
                      <Link  to='/userprofile'>

                      <button className='btn-success' >
                              Ver mis pedidos
                          </button>
                          </Link> 

                          {/* <button className='btn-success' onClick={this.props.doSomething} >
                              Descargar Recibo Compra
                          </button> */}
                            <Link to="/">
                          <button className='btn-success' >
                              Ir al Home
                          </button> 
                          </Link>
                          
      
                  </div>
                  </div>
      
                  {/* <p className='p-info-end-succes-container'>❗️Le enviaremos por correo electronico una confirmacion del pedido con detalles e informacion de seguimiento.</p> */}
                  <p className='p-info-end-succes-container'>cell +57 310-570-6238 ⎮ tel 6746457 ⎮ correo contacto@san-diego.com.co ⎮</p>
                  </div>
      
            </div>
            </>
        );
    }  
}
export default SuccessReceipt;
