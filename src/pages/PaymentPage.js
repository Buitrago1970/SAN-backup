import React from 'react'

import Address from "../components/Address";

import Payment from "../components/Payment";

export default function PaymentPage() {
    return (
        <div className="main-container">
        <div className="hero-shopping-cart">
          <div>
            <Address />
            stripe
          </div>
          <Payment data={"Proceder al pago"} route={"/carrocompras/{}/direccion"}/>
        </div>
      </div>
    )
}
