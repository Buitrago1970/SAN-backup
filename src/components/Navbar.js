import React, { useContext } from "react";

import "./styles/navbar.css";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";
import Appcontext from "../context/Appcontext";

function Navbar() {
  const { setInitialState } = useContext(Appcontext);

  return (
    <>
      <nav>
        <div className="search">
          <div className="container-serch">
            <span className="icon">
              <i className="fa fa-search">
                <AiOutlineSearch />
              </i>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Buscar..."
              id="search"
              onChange={(e) => setInitialState(e.target.value)}
            />
          </div>
        </div>
        <div className="container-shopping-cart-nav">
          <Link to="/carroCompras">
            <FiShoppingCart className="shopping-cart-nav" />
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
