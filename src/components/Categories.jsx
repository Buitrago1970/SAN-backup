import React from "react";

import "./styles/Categories.css"
export default function Categories({ children, title }) {
  return (
    <>
      <div className="categories-title-container">
        <hr className="line-indicator-products" />
        <h1 className="categories-title">{title}</h1>
        <hr className="line-indicator-products" />
      </div>
      {children}
    </>
  );
}
