import React from "react";

import "./styles/notFound.css";
import Error from "../images/a404-Error-page.svg";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <div className="Not-found ">
        <div className="Not-found__container">
          <h1 className="titulo">404</h1>
          <div className="Errorpage-topImage">
            <img className="img-fluid img_error" src={Error} alt="Error" />
          </div>
          <h3>parece que estás perdido</h3>
          <p>la página que busca no está disponible</p>
          <Link to="/" className="btn btn-primary">
            Go To Home
          </Link>
        </div>
      </div>
    </>
  );
}

export default NotFound;
