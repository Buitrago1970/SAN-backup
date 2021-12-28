import React from "react";

import "./styles/Address.css";
import { Link } from "react-router-dom";

import Payment from "../components/Payment";
export default function Adress() {
  return (
    <div className="hero-shopping-cart">
      <div className="Information">
        <div className="Information-head">
          <div className="secondary-title">Información de contacto:</div>
        </div>
        <div className="Information-form">
          <form action="">
            <div className="form-child-div">
              <span></span>
              <label className="andes-form-control andes-form-control-long" >
                <span className="andes-form-control__label" >
                  Nombre y apellido
                </span>
                <div className="andes-form-control__control" >
                  <input className="xd" type="text" name="name"></input>
                </div>
                <p className="andes-form-coactiventrol_bottom">Tal cual figure en el documento.</p>
              </label>

              <span></span>
              <div className="container-andes-form-control">
                <label className="andes-form-control">
                  <span className="andes-form-control__label">
                    Departamento
                  </span>
                  <div className="andes-form-control__control">
                    <input className="xd" type="text" name="name"></input>
                  </div>
                </label>
                <label className="andes-form-control">
                  <span className="andes-form-control__label">Localidad</span>
                  <div className="andes-form-control__control">
                    <input className="xd" type="text" name="name"></input>
                  </div>
                </label>
              </div>
              <label className="andes-form-control">
                <span className="andes-form-control__label">Barrio</span>
                <div className="andes-form-control__control">
                  <input className="xd" type="text" name="name"></input>
                </div>
              </label>
              <label className="andes-form-control">
                <span className="andes-form-control__label">Direccion</span>
                <div className="andes-form-control__control">
                  <input className="xd" type="text" name="name"></input>
                </div>
              </label>
              {/* //////////////////////////////////////////////////////// */}
              <label className="andes-form-control">
                <span className="andes-form-control__label">Correo</span>
                <div className="andes-form-control__control">
                  <input className="xd" type="text" name="name"></input>
                </div>
              </label>
              <label className="andes-form-control andes-form-control-long">
                <span className="andes-form-control__label">
                  Teléfono de contacto
                </span>
                <div className="andes-form-control__control">
                  <input
                    className="xd"
                    type="text"
                    name="name"
                    placeholder="Llamarán a este numero si hay algun problema con el envio. "
                  ></input>
                </div>
                <p className="andes-form-coactiventrol_bottom"> Llamaran a este numero si hay algun problema en el envio.</p>
              </label>
              <label className="andes-form-control andes-form-control-to-long">
                <span className="andes-form-control__label" maxlength="128">
                  Referencias adicionales para las entregas en esta dirección
                </span>
                <div className="andes-form-control__control">
                  <input
                    className="xd"
                    type="text"
                    name="name"
                    placeholder="Descripcion de la fachada, puntos de referencia para encontrarla, indicaciones de seguridad, etc."
                  ></input>
                </div>
              </label>
            </div>
          </form>
        </div>
        <div className="information-buttons">
          <Link to="/carrocompras">
            <div className="information-back">Regresar</div>
          </Link>
        </div>
      </div>
      <Payment data={"Continuar"} />
    </div>
  );
}
