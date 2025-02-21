import React, { useEffect } from "react";

import "../btn.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // React Font Awesome component
import { faPhone } from "@fortawesome/free-solid-svg-icons"; // Specific icons
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "./Spare.css"; // Create a CSS file for custom styling
import ProductSection from "./ProductSection";
import ContactUs from "../ContactUs";
import TermsAndConditions from "./TermsConditions";
import ProductPrice from "./ProductPrice";

const Spare = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="container-fluid py-5 padding-top my-2">
        <div className="row p-0 px-3 py-4 px-md-5">
          <div className="container justify-content-center d-flex">
            <section className="left mt-5  d-none d-lg-block">
              <span className="fs-4 p-0 fw-bold d-flex gap-3 mb-3">
                Products{" "}
                <span className="w-75">
                  {" "}
                  <hr className="w-100 border-2" />
                </span>
              </span>

              <div
                className="p-3 rounded-3"
                style={{ height: "28rem", background: "#F8F8F8" }}
              >
                <div
                  className="col overflow-y-scroll  d-flex flex-column overflow-x-hidden "
                  style={{ height: "20rem", padding: "0px 10px" }}
                >
                  <ProductPrice />
                </div>

                <span className="d-flex justify-content-center align-items-center px-5 gap-1 mt-4">
                  <button className="btn gap-2 d-flex align-items-center my-3 px-3 container  btn-primary rounded-pill ">
                    <FontAwesomeIcon icon={faPhone} />
                    <a
                      className="btncall"
                      href="tel:5551234567"
                      target="_blank"
                    >
                      <span> Call Us</span>
                    </a>
                  </button>

                  <button className="btn gap-2 d-flex align-items-center my-3 px-3 container  btn-success rounded-pill ">
                    <FontAwesomeIcon icon={faWhatsapp} />
                    <a
                      href="  https://wa.me/
                                          
                                       "
                      className="btnwhats"
                      target="_blank"
                    >
                      {" "}
                      <span> Whatsapp</span>
                    </a>
                  </button>
                </span>
              </div>
            </section>
            <div className="col-12 py-2 py-sm-0 col-md-8 margin-wepro">
              {/* SEARCH AND DESCRPTION */}

              <div className="w-100 w-md-50">
                <h5 className="fw-bold mt-2 fs-4">
                  High-Quality <span className="text-primary">RO Purifier</span> Spare Parts and Services{" "}
                </h5>

                <p className="w-100 w-md-75">
                  Are you trying to find trustworthy RO purifier services? We
                  offers premium-quality RO purifier replacement parts for all
                  popular manufacturers, guaranteeing your water purifier's
                  stability and optimum performance. Our genuine replacement
                  parts is assembled to maintain the safety and cleanliness of
                  your water, whether they be filters, membranes, or other
                  parts. We effectively handles all of your water purifier
                  demands by specializing in RO repair, cleaning, and
                  installation services in Noida and Gurgaon along with to spare
                  parts.
                </p>
              </div>

              {/*Product galarry  here  */}

              <div className="w-100 w-md-75 ">
                <ProductSection />
              </div>
            </div>
          </div>

          <div>
            <ContactUs />
          </div>
          <TermsAndConditions />
        </div>
      </div>
    </>
  );
};

export default Spare;
