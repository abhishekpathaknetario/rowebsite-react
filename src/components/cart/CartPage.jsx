import React, { Helmet, useEffect } from "react";

import "./CartPage.css";

import P1 from "../../assets/Images/spare-parts/p1.png";
import P2 from "../../assets/Images/spare-parts/p2.png";

const CartPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="container py-5 ">
        <h2>Added items</h2>

        <p>2 Product in your cart.</p>

        <div className="container d-flex gap-5 flex-wrap flex-lg-nowrap  justify-content-between">
          <div className="">
            <div className="container-fluid w-100">
              <div className="mx-2">
                <div className="row p-2">
                  <div
                    className="container cart-card p-2 rounded-4"
                    style={{ background: "#F8F8F8" }}
                  >
                    <div className="row align-items-center gap-0 gap-md-5">
                      {/* Image Container */}
                      <div className="col-4 col-sm-3 col-md-2">
                        <div className="img-container rounded-4 container">
                          <img src={P1} alt="Product" className="img-fluid" />
                        </div>
                      </div>

                      {/* Product Info */}
                      <div className="col-8 col-sm-9 col-md-8">
                        <div className="cart-card-info">
                          <h5 className="text-truncate">
                            Tap, Elbow and Connecter Tap, Elbow and Connecter
                          </h5>
                          <p>
                            Price: <span className="text-primary">$15.66</span>
                          </p>
                        </div>

                        <div className="price d-flex  justify-content-between ">
                          <p className="mb-0 ">Quantity</p>
                          <p className="mb-0">Total Price $25.66</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Section */}
              </div>
            </div>
            <div className="container-fluid w-100">
              <div className="mx-2">
                <div className="row p-2"></div>

                {/* Additional Section */}
                <div className="row mt-3">
                  <div className="col-12 col-lg-4"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="cart-total text-white rounded-3 p-3">
            <h5>Cart Total</h5>
            <p className="d-flex justify-content-between">
              <span>Cart Subtotal </span>
              <span>$40.45</span>
            </p>

            <p className="d-flex justify-content-between">
              <span>GST </span>
              <span>2%</span>
            </p>
            <p className="d-flex justify-content-between">
              <span>Discount </span>
              <span>10%</span>
            </p>

            <button className="btn btn-light rounded-pill w-100">
              Pay Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
