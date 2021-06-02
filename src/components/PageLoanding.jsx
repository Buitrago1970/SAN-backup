import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "./styles/Item.css";
import "./styles/productList.css";
import "./styles/PageLoanding.css";
class PageLoanding extends React.Component {
  render() {
    return (
      <>
        <SkeletonTheme color="#cfcfcf" highlightColor="#ebebeb">
          <div className="list-container">
            <div className="carousel">
              <div className="carousel-container">
                <div className="articulo">
                  {/* imagen */}
                  <div className="img-container">
                    <Skeleton width={230} height={105} />
                  </div>
                  {/* texto */}
                  <div className="description">
                    {/* nombre */}
                    <h2 className="name-product">
                      {" "}
                      <Skeleton width={200} />
                    </h2>
                    {/* peso */}
                    <div className="product-weight">
                      <p className="product-quantity">
                        <Skeleton width={100} />
                      </p>
                      <p className="product-quantity weigth">
                        <Skeleton width={100} />
                      </p>
                    </div>
                    {/* empaque */}
                    <div className="preparation-container">
                      <h3 className="preparation-product">
                        <Skeleton />
                      </h3>
                      <hr />
                    </div>
                    {/* precio */}
                    <div className="price-container">
                      <span className="price">
                        {" "}
                        <Skeleton width={100} />
                      </span>
                    </div>
                    {/* botones */}
                    <div className="container-buttons">
                      <a href="#" className="bt-">
                        <Skeleton />
                      </a>

                      <div className="container-counter">
                        <p className="counter-quantity-products">
                          {" "}
                          <Skeleton />
                        </p>
                      </div>
                      <a href="#" className="bt- bt-mas">
                        <Skeleton />
                      </a>
                    </div>
                    {/* boton añadir */} <Skeleton height={30} />
                  </div>
                </div>
                <div className="articulo">
                  {/* imagen */}
                  <div className="img-container">
                    <Skeleton width={230} height={105} />
                  </div>
                  {/* texto */}
                  <div className="description">
                    {/* nombre */}
                    <h2 className="name-product">
                      {" "}
                      <Skeleton width={200} />
                    </h2>
                    {/* peso */}
                    <div className="product-weight">
                      <p className="product-quantity">
                        <Skeleton width={100} />
                      </p>
                      <p className="product-quantity weigth">
                        <Skeleton width={100} />
                      </p>
                    </div>
                    {/* empaque */}
                    <div className="preparation-container">
                      <h3 className="preparation-product">
                        <Skeleton />
                      </h3>
                      <hr />
                    </div>
                    {/* precio */}
                    <div className="price-container">
                      <span className="price">
                        {" "}
                        <Skeleton width={100} />
                      </span>
                    </div>
                    {/* botones */}
                    <div className="container-buttons">
                      <a href="#" className="bt-">
                        <Skeleton />
                      </a>

                      <div className="container-counter">
                        <p className="counter-quantity-products">
                          {" "}
                          <Skeleton />
                        </p>
                      </div>
                      <a href="#" className="bt- bt-mas">
                        <Skeleton />
                      </a>
                    </div>
                    {/* boton añadir */} <Skeleton height={30} />
                  </div>
                </div>
                <div className="articulo">
                  {/* imagen */}
                  <div className="img-container">
                    <Skeleton width={230} height={105} />
                  </div>
                  {/* texto */}
                  <div className="description">
                    {/* nombre */}
                    <h2 className="name-product">
                      {" "}
                      <Skeleton width={200} />
                    </h2>
                    {/* peso */}
                    <div className="product-weight">
                      <p className="product-quantity">
                        <Skeleton width={100} />
                      </p>
                      <p className="product-quantity weigth">
                        <Skeleton width={100} />
                      </p>
                    </div>
                    {/* empaque */}
                    <div className="preparation-container">
                      <h3 className="preparation-product">
                        <Skeleton />
                      </h3>
                      <hr />
                    </div>
                    {/* precio */}
                    <div className="price-container">
                      <span className="price">
                        {" "}
                        <Skeleton width={100} />
                      </span>
                    </div>
                    {/* botones */}
                    <div className="container-buttons">
                      <a href="#" className="bt-">
                        <Skeleton />
                      </a>

                      <div className="container-counter">
                        <p className="counter-quantity-products">
                          {" "}
                          <Skeleton />
                        </p>
                      </div>
                      <a href="#" className="bt- bt-mas">
                        <Skeleton />
                      </a>
                    </div>
                    {/* boton añadir */} <Skeleton height={30} />
                  </div>
                </div>
                <div className="articulo">
                  {/* imagen */}
                  <div className="img-container">
                    <Skeleton width={230} height={105} />
                  </div>
                  {/* texto */}
                  <div className="description">
                    {/* nombre */}
                    <h2 className="name-product">
                      {" "}
                      <Skeleton width={200} />
                    </h2>
                    {/* peso */}
                    <div className="product-weight">
                      <p className="product-quantity">
                        <Skeleton width={100} />
                      </p>
                      <p className="product-quantity weigth">
                        <Skeleton width={100} />
                      </p>
                    </div>
                    {/* empaque */}
                    <div className="preparation-container">
                      <h3 className="preparation-product">
                        <Skeleton />
                      </h3>
                      <hr />
                    </div>
                    {/* precio */}
                    <div className="price-container">
                      <span className="price">
                        {" "}
                        <Skeleton width={100} />
                      </span>
                    </div>
                    {/* botones */}
                    <div className="container-buttons">
                      <a href="#" className="bt-">
                        <Skeleton />
                      </a>

                      <div className="container-counter">
                        <p className="counter-quantity-products">
                          {" "}
                          <Skeleton />
                        </p>
                      </div>
                      <a href="#" className="bt- bt-mas">
                        <Skeleton />
                      </a>
                    </div>
                    {/* boton añadir */} <Skeleton height={30} />
                  </div>
                </div>
                <div className="articulo">
                  {/* imagen */}
                  <div className="img-container">
                    <Skeleton width={230} height={105} />
                  </div>
                  {/* texto */}
                  <div className="description">
                    {/* nombre */}
                    <h2 className="name-product">
                      {" "}
                      <Skeleton width={200} />
                    </h2>
                    {/* peso */}
                    <div className="product-weight">
                      <p className="product-quantity">
                        <Skeleton width={100} />
                      </p>
                      <p className="product-quantity weigth">
                        <Skeleton width={100} />
                      </p>
                    </div>
                    {/* empaque */}
                    <div className="preparation-container">
                      <h3 className="preparation-product">
                        <Skeleton />
                      </h3>
                      <hr />
                    </div>
                    {/* precio */}
                    <div className="price-container">
                      <span className="price">
                        {" "}
                        <Skeleton width={100} />
                      </span>
                    </div>
                    {/* botones */}
                    <div className="container-buttons">
                      <a href="#" className="bt-">
                        <Skeleton />
                      </a>

                      <div className="container-counter">
                        <p className="counter-quantity-products">
                          {" "}
                          <Skeleton />
                        </p>
                      </div>
                      <a href="#" className="bt- bt-mas">
                        <Skeleton />
                      </a>
                    </div>
                    {/* boton añadir */} <Skeleton height={30} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SkeletonTheme>
      </>
    );
  }
}
export default PageLoanding;
