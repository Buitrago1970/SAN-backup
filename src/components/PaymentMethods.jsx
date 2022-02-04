import React from 'react';

import "./styles/PaymentMethods.css";

export default function PaymentMethods({data}) {
    debugger;
  return (
      <>
     <br />
   <div className="shopping-list">
        <div className="payment-methods">
             <p className="cart-length-title">Formas de pago</p>
             <div className="payment-methods-container">
                    <ul className='badge-type-selection__list'>
                        {data.map((item, index) => (
                        <li className='badge-type-selection__list-item' key={index}>
                                <label className="badge-type-selection__label">
                                    <div className='ui-radio-element'>
                                        <input type='radio' name='radio' />
                                        <span className='ui-radio-element__control'></span>
                                    </div>
                                    <div className="ui-radio__text">
                                        <span className='ui-badge'>
                                            <img src={item.image}alt={item.name} />
                                        </span>
                                        <span className='ui-badge'>
                                        <h2 className='badge-type-selection__list-title'>{item.name}</h2>  
                                        <p className='badge-type-selection__list-description'>{item.description}</p> 
                                        </span>
                                    </div>
                                </label>                                
                        </li>  

                        ))}
                                           
                    </ul>
             </div>        
        </div>
   </div>

      </>
  );
}
