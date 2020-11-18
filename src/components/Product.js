import React from "react";
import "./Product.css";
function Product({
  id,
  title,
  img1,
  img2,
  img3,
  productInfo,
  direction,
  slide,
}) {
  return (
    <div data-aos={slide} className="product">
      <h4 className="product-title">{title}</h4>
      <div className={`product-content ${direction}`}>
        <div className="product-slider">
          <div
            id={`carouselExampleFade${id}`}
            className="carousel slide carousel-fade"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={img1}
                  className="d-block w-100 product-img"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={img2}
                  className="d-block w-100 product-img"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={img3}
                  className="d-block w-100 product-img"
                  alt="..."
                />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href={`#carouselExampleFade${id}`}
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href={`#carouselExampleFade${id}`}
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div className="product-info">
          <h5 className="product-info-title">Ürün Açıklaması</h5>
          <p className="product-info-context">{productInfo}</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
