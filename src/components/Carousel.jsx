import React from "react";

export default function Carousel({ children }) {
  return (
    <div className="carousel">
      <div className="carousel-container">{children}</div>
    </div>
  );
}
