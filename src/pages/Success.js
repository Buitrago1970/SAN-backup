import React, { useContext } from "react";
// import ReactToPrint from "react-to-print";
import Appcontext from '../context/Appcontext';
import { useHistory } from "react-router-dom";


import SuccessReceipt from "../components/SuccessReceipt"

export default function Success() {
  const history = useHistory();
  const { state: { receipt } } = useContext(Appcontext);
  console.log(receipt.data);
  if (receipt.data) {
    return (
      <>
        <div>
          <SuccessReceipt receipt={receipt} />
        </div>
      </>
    );
  } else {
    return (history.push('/'))
  }

}