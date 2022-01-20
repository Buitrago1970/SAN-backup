import * as React from 'react'
import { useContext } from 'react';
import Appcontext from '../context/Appcontext';
import Address from "../components/Address";

import Payment from "../components/Payment";

export default function PaymentPage() {
  const {state:{user}} = useContext(Appcontext)
      return (
        <div className="main-container">
        <div className="hero-shopping-cart">
          <div>
            <Address user={user[0]} />
            stripe
          </div>
          <Payment data={"Proceder al pago"} route={"/carrocompras/{}/direccion"}/>
        </div>
      </div>
    )
}
