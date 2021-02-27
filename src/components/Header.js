import React from "react";
// import Logo from "../Images/logo San Diego.svg";
import "./styles/header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiShoppingCart } from "react-icons/fi";

class Header extends React.Component {
  render() {
    return (
      <>
        <div className="header">
          <div className="container-button-hamburger">
            <a href="#!">
              <GiHamburgerMenu />
            </a>
          </div>
          <div className="container-logo">
            <a className="header__brand-logo" href="/">
              <img className="logo" src="#" alt="SAN" />
            </a>
          </div>
          <div className="container-shopping-cart">
            <a href="#!">
              <i className="fas fa-shopping-cart"></i>
              <FiShoppingCart />
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default Header;
