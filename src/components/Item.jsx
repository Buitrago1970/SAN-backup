import React from "react";

import "./styles/Item.css";
import Product from "../images/7ad45b7e1d6d74dde087cd6f41f04f0b.png";
import Modal from "./Modal.jsx";
import { BsTrash } from "react-icons/bs";
export default function Item(props) {
  return (
    <>
      <div className="c">
        <div className="principal-product">
          <div className="img-container-shopping-car">
            <img className="img" src={Product} alt="img" />
          </div>
          <div className="container-inf-product">
            <a href="#">
              <h2 className="name-product p-item">Lomo Adobado</h2>
            </a>
            <p className="p-item">Presentación:Filete</p>
            <p className="kilo-value p-item">Valor Kilo:$14.000</p>
            <div className="container-buttons p-item">
              <a href="#" className="bt-">
                -
              </a>
              <div className="contenedor-contador">
                <p className="contador-productos">1</p>
              </div>
              <a href="#" className="bt- bt-mas">
                +
              </a>
            </div>
            <p onClick={props.onOpenModal} className="btn-delete">
              <BsTrash /> Borrar Item
            </p>
            <Modal isOpen={false} onCloseModal={props.onCloseModal}>
              yo estoy en mi peak
            </Modal>
          </div>
          <div className="total-price">
            <div className="values-product">
              <p className="price">$14.000</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
