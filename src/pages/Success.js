import React, { useContext } from "react";
// import ReactToPrint from "react-to-print";
import Appcontext from '../context/Appcontext';
import { useHistory } from "react-router-dom";


import SuccessReceipt from "../components/SuccessReceipt"

export default function PrintComponent() {
  const history = useHistory();

  const { state: { receipt } } = useContext(Appcontext);
  // let componentRef = useRef();
  // const doSomething = () => {

  // }
  if (receipt.toatalPedido) {
    history.push("/")

  } else {
    return (
      <>
        <div>
          {/* button to trigger printing of target component */}
          {/* <ReactToPrint
            trigger={() => <button>Print this out!</button>}
            content={() => componentRef}
          /> */}

          {/* component to be printed */}

          {/* <SuccessReceipt ref={(el) => (componentRef = el)} receipt={receipt} doSomething={doSomething} /> */}
          <SuccessReceipt receipt={receipt} />

        </div>
      </>
    );
  }

}