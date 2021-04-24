import React from "react";

import "./styles/navbar.css";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";
class Navbar extends React.Component {
  render() {
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
              <input type="search" id="search" placeholder="Buscar..." />
            </div>
          </div>
          <div className="container-shopping-cart-nav">
            <Link to="#!">
              <FiShoppingCart className="shopping-cart-nav" />
            </Link>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
