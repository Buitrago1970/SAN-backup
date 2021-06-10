import React from "react";
import ReactDOM from "react-dom";

import "./styles/Modal.css";

export default function Modal(props) {
  if (!props.isOpen) {
    return null;
  }
  return ReactDOM.createPortal(
    <div className="Modal">
      <div className="Modal__container">
        <button onClick={props.onCloseModal} className="Modal__close-button">
          x
        </button>
        {props.children}
      </div>
    </div>,
    document.getElementById("modal")
  );
}
