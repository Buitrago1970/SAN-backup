import * as React from "react";
import { useState } from "react";

import { AiOutlineSearch } from "react-icons/ai";
import ProductsList from "../components/ProductsList";
import "./styles/navbar.css";

function Navbar() {
  const [search, setSearch] = useState("");

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
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </nav>
      <div className="title">
        <h1 className="principal-title">Carniceria Online</h1>
        <h3 className="title-secondary">surticarnes san diego</h3>
      </div>

      <ProductsList search={search} />
    </>
  );
}

export default Navbar;
