import * as React from 'react';

import "./styles/Error.css";

import errorIcon from "../images/148766.png";
export default function Error() {
  return (
      <>
        <div className='main-container main-container-error'>
            <div className='error-container'>
                <div className='info-error-order'>
                    <div className='image-title'>
                        <div className='img-container'>
                            <img src={errorIcon} alt="" />
                        </div>
                        <h1>¡Conexion fallida!</h1>
                    </div>
                    <div className='info-container'>
                        <h3>¡Lo sentimos!</h3>
                        <p className='p-info-error-order'>Algo salio mal</p>
                        <p className='p-info-error-order'>Por favor intenta de nuevo</p>
                    </div>
                </div>
                <div className='buttons-error-info'>
                    <button className='btn-error'>
                        Volver a intentar
                    </button>
                    <button className='btn-error btn-error-ok'>
                        OK
                    </button>
                </div>    
            </div>                
        </div>
      </>
  );
}
