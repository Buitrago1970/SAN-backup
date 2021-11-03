import React, { useState } from "react";
import "./styles/ShoppingList.css";
import Item from "./Item";

export default function ShoppingCart() {
  const [modal, setModal] = useState(false);

  function handleOpenModal() {
    setModal(true);
    alert("si");

    
  }
  function handleCloseModal() {
    setModal(false);
    alert("no");
  }
  return (
    <>
      <div className="shopping-list">
        <div className="secondary-title">
          <div className="secondary-title">Opciones de envío a</div>
          <p className="title-price">Precio</p>
        </div>
        <div className="List">
          <Item
            OpenModal={modal}
            onOpenModal={handleOpenModal}
            onCloseModal={handleCloseModal}
          />
          <Item onOpenModal={handleOpenModal} onCloseModal={handleCloseModal} />
          <Item onOpenModal={handleOpenModal} onCloseModal={handleCloseModal} />
        </div>
      </div>
    </>
  );
}
